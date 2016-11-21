'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
import routes from './samplepef.routes';

export class SamplepefComponent {
  $http;
  recruit;
  id;
  p = []; //master list of pefs
  pefs = [];  //pefs for display
  code;
  fErr;
  fCategory;
  selectedPef;
  req;

  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/').then(responsePef => {
      this.p = responsePef.data;

      this.$http.get('/api/recruits/' + this.id).then(responseRec => {
        let fullrecruit = responseRec.data;
        this.recruit = fullrecruit['match'] || {}; //pull only "match" object data for comparison
        this.recruit.fullName = fullrecruit.fullName;
        this.recruit.age = {};
        this.recruit.age.val = fullrecruit.age.val;
        this.pefs = getErrs(this.p, this.recruit);
      });
    });

  }   //oninit
} //class

//combine with getPefErrors
function getErrs(pefs, recr) {
  for (let pef of pefs) {
    pef.errs = getPefErrors(pef.requirements, recr);  //actual error count for display
    pef.errCategory = (pef.errs < 4) ? pef.errs : 4;     //error category, will match the error filter buttons
  }

  return pefs;
}

function getPefErrors(pef, recr) {
  let errs = 0;
  let rec = recr;
  let rval;

  compareObjects(pef, recr);

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
