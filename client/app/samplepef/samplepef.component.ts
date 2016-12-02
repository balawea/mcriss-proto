'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
const Masonry = require('masonry-layout');

import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  recruit;
  id;
  p = [];
  pefs = [];
  fErr;
  fCategory;
  selectedPef;
  req;
  fullrecruit;


  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();
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
        var msnry = new Masonry( '.grid', {
          itemSelector: '.grid-item',
          columnWidth: 275,
          transitionDuration: '0.8s'
        });

        //re-lay the tiles. Otherwise they overlap on load.
        msnry.reloadItems();
        console.log('INIT');
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

  compareObjects(p, r);

  function compareObjects(pef, recr) {
    for (let pkey in pef) {
      let pval = pef[pkey];

      rval = (!!recr) ? recr[pkey] : undefined;

      if (typeof(pval) == "object") {
        compareObjects(pval, rval);
      }

      if ((pkey == "val" || pkey == "has") && (pval !== rval)) {
        ++errs;
        pef.flag=true;
        continue;
      }

      rval = (!!recr) ? recr["val"] : undefined;
      if ((pkey == "max" && (rval == undefined || rval > pval)) || (pkey == "min" && (rval == undefined || rval < pval))) {
        pef.flag=true;
        ++errs;
      }
    }
  }
  return errs;
}

export default angular.module('mcrissDemoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
