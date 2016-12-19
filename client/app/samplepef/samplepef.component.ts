'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
const Masonry = require('masonry-layout');

import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  $state;
  timeout;
  root;
  scope;
  recruit;
  id;
  p;
  pefs;
  fErr;
  selectedPef;
  req;
  fullrecruit;
  msnry;

  /*@ngInject*/
  constructor($http, $location, $timeout, $rootScope, $state) {
    this.$http = $http;
    this.id = $location.hash();
    this.timeout = $timeout;
    this.root = $rootScope;
    this.$state = $state;
    
    //if no hash (no applicant selected), go to recruiterview to choose an applicant.
    if (this.id==='')
      this.$state.go('recruiterview');
    
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/').then(responsePef => {
      this.p = responsePef.data;
      this.$http.get('/api/recruits/' + this.id)
        .then(responseRec => {
        let match = 'match';
        this.fullrecruit = responseRec.data;
        this.recruit = this.fullrecruit[match] || {}; //pull only "match" object data for comparison
        this.recruit.fullName = this.fullrecruit.fullName;
        this.recruit.age = {val: this.fullrecruit.age.val};
        this.recruit.ssn = this.fullrecruit.personal.ssn;
        this.recruit.dob = this.fullrecruit.dob;
        this.recruit.status = this.fullrecruit.status;
        this.recruit.flaggedPefs = this.fullrecruit.flaggedPefs || [];
        this.recruit.pefCode = (this.fullrecruit.assignedPef || {}).pefCode || undefined;
        
        this.pefs = getFlags(this.p, this.recruit);
        
        //alert the pageheader controller to display the current recruit
        this.root.$broadcast('SELECT_RECRUIT', this.recruit);
      })
      .then(foo => {
        this.layout();
      });
    });

  }   //oninit

  toggleAssignment() {
    if (this.selectedPef) {
      if (this.isAssigned(this.selectedPef)) {
        this.fullrecruit.assignedPef = {};
      }
      else{
        this.fullrecruit.assignedPef = {pefCode: this.selectedPef.pefCode, id: this.selectedPef._id};
      }
      this.$http.put('/api/recruits/' + this.id, this.fullrecruit);
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
      return pef.pefCode === this.fullrecruit.assignedPef.pefCode;
    }
    return false;
  }

  select(pef) {
    this.selectedPef = pef;
//    this.timeout(this.layout, 200, false);
    this.layout();
  }

  //delaying the call to refresh the masonry handle gives the digest time to update the DOM before masonry
  //lays the bricks out. Otherwise, masonry executes before changes to the brick dimensions have been finalized.
  layout() {
    this.timeout(function() {
      let msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        columnWidth: 275,
        transitionDuration: '0.4s'
      });
    }, 200, false);
  }

  waive(obj) {
    obj.iswaived = !obj.iswaived;
    obj.flag = !obj.iswaived;
    
    if (obj.iswaived)
      this.selectedPef.errs -= 1;
    else
      this.selectedPef.errs += 1;
  }

  saveRecruit() {
    if (this.selectedPef) {
      this.$http.put('/api/recruits/' + this.id, this.fullrecruit);
    }
  }//

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
      this.$http.put('/api/recruits/' + this.id, this.fullrecruit);
    }
  }//

} //class

function getFlags(pefs, recr) {
  for (let pef of pefs) {
    pef.requirements.pefCode = pef.pefCode;
    pef.errs = getPefErrors(pef.requirements, recr);  //actual error count for display
    pef.errCategory = (pef.errs < 3) ? pef.errs : 3;     //error category, will match the error filter buttons
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
  let isStarred = p.pefCode===r.pefCode;

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


      // Below: if we have all necessary parties populated at once, indicate whether the parent pef node is in a waivable state

      //For a waivable error on a boolean or exact value field (pefval), we know there will be no waiver amount to compare
      //since only min/max fields (pefmax or pefmin) can have a waiver amount in the model.
      //Eg, drivers.license and sex might be waivable, but will not have a waiver amount.
      if (isErr && isWaivable && (pefval !== undefined)){
        //Decrement the error counter here and implement a waivable issue count instead?
        pef.canwaive = true;
        pef.iswaived = isStarred;
        pef.flag = !isStarred;
        continue;
      }

      //We need to see if the recruit value +/- the waiver amount is within range of the pef min/max fields.
      //MIN
      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmin !== undefined)){
        if (recval + waiver >= pefmin) {
          pef.canwaive = true;
          pef.iswaived = isStarred;
          pef.flag = !isStarred;
          continue;
        }
      }

      //MAX
      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmax !== undefined)){
        if (recval - waiver <= pefmax) {
          pef.canwaive = true;
          pef.iswaived = isStarred;
          pef.flag = !isStarred;
          continue;
        }
      }

    } // for (let pkey in pef)
  } // CompareObjects

  
  //clear errors if the pef is selected
  if(isStarred){
    errs = 0;
  }

  return errs;
} //GetPefErrors

function getBookmarks(pefs, bkmarks) {
  if(bkmarks===undefined)
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

























