'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
const Masonry = require('masonry-layout');
const swal = require('sweetalert');
import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  timeout;
  root;
  recruit;
  id;
  p;
  pefs;
  selectedPef;
  req;
  fullrecruit;
  msnry;
  user;
  getUser : Function;

  /*@ngInject*/
  constructor($http, $location, $timeout, $rootScope, $state, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    this.timeout = $timeout;
    this.root = $rootScope;
    this.getUser = Auth.getCurrentUserSync;
    
    //if no hash (no applicant selected), go to recruiterview to choose one.
    if (this.id === '')
      $state.go('recruiterview');
    
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.user = this.getUser()

    this.$http.get('/api/pefRequirements/').then(responsePef => {
      this.p = responsePef.data;
      this.$http.get(`/api/recruits/${this.id}`).then(responseRec => {
        let match = 'match';
        this.fullrecruit = responseRec.data;
        this.recruit = this.fullrecruit[match] || {}; //pull only "match" object data for comparison
        this.recruit.age = {val: this.fullrecruit.age.val};
        this.recruit.flaggedPefs = this.fullrecruit.flaggedPefs || [];
        this.recruit.pefCode = (this.fullrecruit.assignedPef || {}).pefCode || undefined;
        this.pefs = getFlags(this.p, this.recruit);
        this.pefs.sort(this.byErrs);
        this.select(this.pefs[0]);

        this.broadcastRecruit(this.fullrecruit);
      })
      .then(foo => {
        this.layout();
      });
    });
  }   //oninit

  //Save assignment changes 
  toggleAssignment() {
    if (this.selectedPef) {
      let assigning = !this.isAssigned(this.selectedPef);
      let haswaivers = this.hasWaivers(this.selectedPef);

      //months in seed data are FY based: Oct=0, Nov=1, etc. 
      //Init month to the current month
      let month = (new Date().getMonth() + 3) % 12;

      if (assigning) {
        this.fullrecruit.assignedPef = {pefCode: this.selectedPef.pefCode, id: this.selectedPef._id, month: month};
        this.fullrecruit.exams.waiver = (haswaivers) ? "Requested" : "";
        this.selectedPef.errs = -1;
      }
      else {
        month = this.fullrecruit.assignedPef.month;  //we are freeing up a seat. Apply it back to the month it was assigned in. 
        this.fullrecruit.assignedPef = {};
        this.fullrecruit.exams.waiver = undefined;
        this.selectedPef.errs = 0;
        this.selectedPef.errCategory = 0;
      }
      
      this.pefs.sort(this.byErrs);

      //save pef assignment to recruit document
      this.$http.put(`/api/recruits/${this.id}`, this.fullrecruit)
      .then(res => {
        if(assigning) {
          if (haswaivers)
            swal("Waiver", `Waiver process initiated for assignment to PEF ${this.selectedPef.pefCode}`, "success");
          else
            swal("Assigned", `Candidate successfully assigned to PEF ${this.selectedPef.pefCode}`, "success");
        }
        else
          swal("Unassigned", `Candidate is no longer assigned to PEF ${this.selectedPef.pefCode}`, "info");

        this.broadcastRecruit(this.fullrecruit);
      });
      
      //update month assignment total to RS document
      this.$http.get(`/api/rss/rs/${this.user.rs}`)
      .then(res => {
        var data = res.data[0];
        var actual = data.allocation[this.selectedPef.pefCode].actual;

        if (assigning)  //increment
          actual['m'+month] += 1;
        else            //decrement
          actual['m'+month] -= 1;
        
        this.$http.put(`/api/rss/${data._id}`, data);
      });

    }
  }

  canAssign(pef) {
    if (pef) {
      return pef.errs === 0 && this.isAssigned(pef) === false;
    }
    return false;
  }

  isAssigned(pef) {
    if (pef && this.fullrecruit.assignedPef) {
      var isassigned = pef.pefCode === this.fullrecruit.assignedPef.pefCode;
      if (!isassigned && pef.errs === -1) {
        pef.errs = 0;
      }
      return isassigned;
    }
    return false;
  }
  
  hasWaivers(pef) {
    return pef.waivercount > 0;
  }

  select(pef) {
    this.selectedPef = pef;
    this.layout();
  }

  //delaying the call to refresh the masonry handle gives the digest time to update the DOM
  //Otherwise, masonry executes before changes to the tile dimensions have been finalized
  //and stacks them on top of each other.
  layout() {
    this.timeout(function() {
      let msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.4s'
      });
    }, 300, false);
  }

  waive(obj) {
    obj.iswaived = !obj.iswaived;
    obj.flag = !obj.iswaived;
    
    if (obj.iswaived) {
      this.selectedPef.errs -= 1;
      this.selectedPef.waivercount += 1;
    }
    else {
      this.selectedPef.errs += 1;
      this.selectedPef.waivercount -= 1;
    }
    this.pefs.sort(this.byErrs);
  }

  saveRecruit() {
    if (this.selectedPef) {
      this.$http.put(`/api/recruits/${this.id}`, this.fullrecruit);
    }
  }

  toggleBookmark() {
    if(this.selectedPef) {
      let bkmarked = !this.selectedPef.isBookmarked;
      let code = this.selectedPef.pefCode;
      let found = false;
      this.selectedPef.isBookmarked = bkmarked;
      let newBookmark = { pefCode: code, notes: undefined, recruiter: undefined, isBookmarked: bkmarked};

      let flagarray = this.recruit.flaggedPefs;
      for (let item of flagarray) {
        if (item.pefCode===code) {
          found = true;
          item.isBookmarked = bkmarked;
        }
      }

      if (!found) {
        flagarray.push(newBookmark);
      }

      this.fullrecruit.flaggedPefs = flagarray;
      this.$http.put(`/api/recruits/${this.id}`, this.fullrecruit);
    }
  }//

  byErrs(a, b) {
    let aerr = a.errs;
    let berr = b.errs;
    let acode = a.pefCode;
    let bcode = b.pefCode;

    if (aerr < berr)
      return -1;
    if (aerr > berr)
      return 1;

    //if aerr = berr
    if (acode < bcode)
      return -1;
    if (acode > bcode)
      return 1;
  }
  
  broadcastRecruit(recr) {
   //alert the pageheader controller to display the current recruit
      let profile = {id: recr._id, fullName: recr.fullName, age: recr.age.val, sex: recr.match.sex.val, status: recr.status, ssn: recr.personal.ssn}; 
      this.root.$broadcast('SELECT_RECRUIT', profile);
  }//
} //class

function getFlags(pefs, recr) {
  for (let pef of pefs) {
    pef.requirements.pefCode = pef.pefCode;

    var data = getPefErrors(pef.requirements, recr);  //actual error count for display
    pef.errs = data.e;
    pef.waivercount = data.w;
    pef.errCategory = (pef.errs <= 3) ? pef.errs : 3;     //error category, will match the error filter buttons
    pef.errCategory = (pef.errs === -1) ? 0 : pef.errCategory;
  }

  pefs = getBookmarks(pefs, recr.flaggedPefs);
  return pefs;
}

function getPefErrors(p, r) {
  let errs = 0;
  let rval;
  let isErr = false;
  let isWaivable = false;
  let waiver;
  let pefval;
  let recval;
  let pefmin;
  let pefmax;
  let isStarred = p.pefCode === r.pefCode;
  let wcount = 0;
  let isWaivableExactValOrBoolean = false;
  let isWaivableMinWithinWaiverAmount = false;
  let isWaivableMaxWithinWaiverAmount = false;

  compareObjects(p, r);

  //Compares the pef.requirements (pef) object with the corresponding nodes in the recruit.match (recr) object.
  //Nested nodes in pef must have the same names as those inside recr, but the terminal nodes are compared as follows:
  //Terminal pef nodes named "min", "max" or "val" are always compared to recr nodes named "val"
  //Eg, pef.cl.min and recr.cl.val, or pef.toe.val and recr.toe.val.
  //Terminal pef nodes named "has" are always compared with "has" nodes, as in pef.algebra.has and recr.algebra.has.
  function compareObjects(pef, recr) {
    for (let pkey in pef) {
      let pval = pef[pkey];

      rval = (!!recr) ? recr[pkey] : undefined;

      if (typeof(pval) === "object") {
        isErr = false;
        isWaivable = false;
        waiver = undefined;
        pefval = undefined;
        pefmin = undefined;
        pefmax = undefined;
        recval = undefined;
        
        isWaivableExactValOrBoolean = false;
        isWaivableMinWithinWaiverAmount = false;
        isWaivableMaxWithinWaiverAmount = false;

        compareObjects(pval, rval);
      }
      
      if ((pkey === "waivable") && (pval === true)) {
          isWaivable = true;
      }
      
      if (pkey === "waiver") {
          waiver = pval;
      }

      //Boolean fields
      //pval===true excludes "negative" requirements like waterqual.has=false as can be set by checkbox values in pefview
      if (pkey === "has" && pval === true && pval !== rval) {
        ++errs;
        pef.flag = true;
        isErr = true;
        pefval = pval;
        recval = rval;
      }

      //Exact value fields. Mostly strings, but some numerics that are not waivable
      if (pkey === "val" && pval !== rval) {
        ++errs;
        pef.flag = true;
        isErr = true;
        pefval = pval;
        recval = rval;
      }
      
      rval = (!!recr) ? recr["val"] : undefined;

      //minmax fields, always numeric
      //TODO: error handling for non-numeric data entered in pefview or seed.js
      if ((pkey === "max" && (rval === undefined || rval > pval)) || (pkey === "min" && (rval === undefined || rval < pval))) {
        pef.flag=true;
        ++errs;

        isErr = true;
        recval = rval;
      
        if (pkey === "max")
          pefmax = pval;
        else
          pefmin = pval;
      }

      //For a waivable error on a boolean or exact value field (pefval), we know there will be no waiver amount to compare
      //since only min/max fields (pefmax or pefmin) can have a waiver amount in the model.
      //Eg, drivers.license and sex might be waivable, but will not have a waiver amount.
      if (isErr && isWaivable && (pefval !== undefined)){
        //Decrement the error counter here and implement a waivable issue count instead?
        isWaivableExactValOrBoolean = true;
      }

      //We need to see if the recruit value +/- the waiver amount is within range of the pef min/max fields.
      //MIN
      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmin !== undefined) && (recval + waiver >= pefmin)){
        isWaivableMinWithinWaiverAmount = true;
      }

      //MAX
      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmax !== undefined) && (recval - waiver <= pefmax)){
        isWaivableMaxWithinWaiverAmount = true;
      }

      // Below: if we have all necessary parties populated at once, indicate whether the parent pef node is in a waivable state
      if (isWaivableExactValOrBoolean || isWaivableMinWithinWaiverAmount || isWaivableMaxWithinWaiverAmount) {
        pef.canwaive = true;
        pef.iswaived = isStarred;
        pef.flag = !isStarred;

        
        if (isStarred)
          wcount++;

        continue;
      }
    } // for (let pkey in pef)
    
  } // CompareObjects
  
  //clear errors if the pef is selected
  if(isStarred){
    errs = -1;
  }

  
  return {e: errs, w: wcount};
} //GetPefErrors

function getBookmarks(pefs, bkmarks) {
  if(bkmarks === undefined)
    return pefs;

  for (let pef of pefs) {
    for (let mark of bkmarks) {
      if (mark.pefCode===pef.pefCode) {
        pef.isBookmarked=true;
      }
      pef.notes = mark.notes;
    }
  }
  
  return pefs;
}

export default angular.module('mcrissDemoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;












