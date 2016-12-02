'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './exams.routes';

export class ExamsComponent {
  recruit;
  $http;
  id;

  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();
  } //ctor
    
    
  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(responseRec => {
      let fullrecruit = responseRec.data;
      this.recruit = fullrecruit['exams'] || {};
      let apef = fullrecruit.assignedPef || {};
      this.recruit.pef = apef.pefCode;
        console.log(apef);
    });
  } //init
}

export default angular.module('mcrissDemoApp.exams', [uiRouter])
  .config(routes)
  .component('exams', {
    template: require('./exams.html'),
    controller: ExamsComponent,
    controllerAs: 'c'
  })
  .name;
