'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './exams.routes';

export class ExamsComponent {
  recruit;
  $http;
  id;
  isAdmin: Function;

  /*@ngInject*/
  constructor($http, $location, Auth) {
    this.$http = $http;
    this.id = $location.hash();
    this.isAdmin = Auth.isAdminSync;
  } //ctor
    
  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(responseRec => {
      let fullrecruit = responseRec.data;
      this.recruit = fullrecruit['exams'] || {};
      let apef = fullrecruit.assignedPef || {};
      this.recruit.pef = apef.pefCode;
      this.recruit.recruiter = fullrecruit.recruiter;
      this.recruit.dutyType = fullrecruit.dutyType;
      this.recruit.mcroc = fullrecruit.mcroc;
    });
  } //init

  saveDutyType() {
    console.log('save duty type!');
  }

} //class

export default angular.module('mcrissDemoApp.exams', [uiRouter])
  .config(routes)
  .component('exams', {
    template: require('./exams.html'),
    controller: ExamsComponent,
    controllerAs: 'c'
  })
  .name;
