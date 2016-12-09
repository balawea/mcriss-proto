'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
const Masonry = require('masonry-layout');

import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  $timeout;
  recruit;
  id;
  p = [];
  pefs = [];
  fErr;
  fCategory;
  selectedPef;
  req;
  fullrecruit;
  msnry;


  /*@ngInject*/
  constructor($http, $location, $timeout) {
    this.$http = $http;
    this.id = $location.hash();
    this.$timeout = $timeout;
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/').then(responsePef => {
      let match = 'match';
      this.p = responsePef.data;
      this.$http.get('/api/recruits/' + this.id).then(responseRec => {
        this.fullrecruit = responseRec.data;
        this.recruit = this.fullrecruit[match] || {}; //pull only "match" object data for comparison
        this.recruit.fullName = this.fullrecruit.fullName;
        this.recruit.age = {val: this.fullrecruit.age.val};
        this.pefs = getErrs(this.p, this.recruit);
      })
      .then(foo => {
        this.msnry = new Masonry( '.grid', {
          itemSelector: '.grid-item',
          columnWidth: 275,
          transitionDuration: '0.8s'
        });

        //re-lay the tiles. Otherwise they overlap on load.
        //this.$timeout(msnry.layout(), 200);
        //msnry.reloadItems(), 200);
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
    this.msnry.reloadItems();
    this.msnry.layout();
    console.log(pef.requirements);
  }

  waive(obj) {
    //vm.selectedPef.requirements.age
    obj.iswaived = !obj.iswaived;
    obj.flag = !obj.iswaived;
    
    if (obj.iswaived)
      this.selectedPef.errs -= 1;
    else
      this.selectedPef.errs += 1;
    //this.msnry.layout();
  }

} //class


//combine with getPefErrors
function getErrs(pefs, recr) {
  for (let pef of pefs) {
    pef.errs = getPefErrors(pef.requirements, recr);  //actual error count for display
    pef.errCategory = (pef.errs < 4) ? pef.errs : 4;     //error category, will match the error filter buttons
  }

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

  compareObjects(p, r);

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

      //if we have all necessary parties populated at once, indicate whether the parent pef node is in a waivable state

      //For a waivable error on a boolean or exact value field (pefval), we know there will be no waiver amount to compare
      //since only min/max fields (pefmax or pefmin) can have a waiver amount in the model. 
      if (isErr && isWaivable && (pefval !== undefined)){
        //Decrement the error counter here and implement a waivable issue count instead?
        pef.canwaive = true;
        pef.iswaived = false;
        continue;
      }

      //Below, we need to see if the recruit value +/- the waiver amount is within range of the pef min/max fields.
      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmin !== undefined)){
        if (recval + waiver >= pefmin) {
          pef.canwaive = true;
          pef.iswaived = false;
          continue;
        }
      }

      if (isErr && isWaivable && (waiver !== undefined) && (recval !== undefined) && (pefmax !== undefined)){
        if (recval - waiver <= pefmax) {
          pef.canwaive = true;
          pef.iswaived = false;
          continue;
        }
      }

    } // for (let pkey in pef)
  } // CompareObjects

  return errs;
} //GetPefErrors

export default angular.module('mcrissDemoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
