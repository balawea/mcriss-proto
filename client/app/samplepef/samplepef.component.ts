
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
      this.pefs = this.p = response.data;
    });

  }   //oninit

} //class



export default angular.module('mcrissDemoApp.samplepef', [uiRouter])
  .config(routes)
  .component('samplepef', {
    template: require('./samplepef.html'),
    controller: SamplepefComponent,
    controllerAs: 'vm'
  })
  .name;
