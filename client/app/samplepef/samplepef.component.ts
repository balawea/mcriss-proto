'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const noUiSlider = require('nouislider');
import routes from './samplepef.routes';

//TODO: all button sticking between gui and f12

export class SamplepefComponent {
  $http;
  recruit;
  id;
  p = []; //master list of pefs
  pefs = [];  //pefs for display
  code;
  fErr;

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


function getErrs(pefs, recr) {
  for (let pef of pefs) {
    pef.errs = getPefErrors(pef.requirements, recr);
    //console.log(pef.pefCode + '  ' + pef.errs);
  }
  return pefs;
}

function getPefErrors(pef, recr) {
  let errs = 0;
  let rec = recr;
  let rval;
  let foo;

  compareObjects(pef, recr);

  function compareObjects(pef, recr) {

    for (let [pkey, pval] of Object.entries(pef)) {
      rval = (!!recr) ? recr[pkey] : undefined;
//      console.log('  ' + pkey);
      // console.log(pval);
      // console.log(recr);
      // console.log(rval);

      if (typeof(pval) == "object") {
        // console.log('    recursion for ' + pkey);
        // console.log(recr);
        // console.log(rval);
        compareObjects(pval, rval);
      }

      //for pef obj KEYS named "val" or "has", check for strict equality against the recruit obj VALUES.
      //"has" VALUES are bool, "val" VALUES are strings or ints.
      if ((pkey == "val" || pkey == "has") && (pval !== rval)) {
        ++errs;
        // console.log('  COMPARISON FAIL on pkey:' + pkey + ' ' + pval + ' != ' + rval);
        // console.log('     errs AFTER COMPARISON FAIL: ' + errs);
        continue;
      }

      //for pef obj KEYS named "max" or "min", verify that recruit object VALUES (under recruit object KEY named "val")
      //are within bounds. pef and recruit object VALUES are ints.
      rval = (!!recr) ? recr["val"] : undefined;
      if ((pkey == "max" && (rval == undefined || rval > pval)) || (pkey == "min" && (rval == undefined || rval < pval))) {
        ++errs;
        // console.log('  COMPARISON FAIL on pkey:' + pkey + ' ' + pval + ' != ' + rval);
        // console.log('    errs AFTER COMPARISON FAIL: ' + errs);
        continue;
      }

      //handle weirdos, min1 and min2, maxAtRs, etc. That asvab OR score thing.
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
