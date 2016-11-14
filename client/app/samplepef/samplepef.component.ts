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

  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(response => {
      this.recruit = response.data;
    });

    this.$http.get('/api/pefRequirements/').then(response => {
      this.p = response.data;
      this.pefs = getErrs(this.p, this.recruit);
    });

  }   //oninit

} //class


//combine with getPefErrors
function getErrs(pefs, recr) {
  for (let pef of pefs) {
    pef.errs = getPefErrors(pef.requirements, recr);  //actual error count for display (red error badge)
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

    for (let [pkey, pval] of Object.entries(pef)) {
      rval = (!!recr) ? recr[pkey] : undefined;

      if (typeof(pval) == "object") {
        compareObjects(pval, rval);
      }

      if ((pkey == "val" || pkey == "has") && (pval !== rval)) {
        ++errs;
        continue;
      }

      rval = (!!recr) ? recr["val"] : undefined;
      if ((pkey == "max" && (rval == undefined || rval > pval)) || (pkey == "min" && (rval == undefined || rval < pval))) {
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
