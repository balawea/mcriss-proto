'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './exams.routes';

export class ExamsComponent {
  recruit;
  fullrecruit;
  $http;
  $root;
  id;
  isAdmin: Function;

  /*@ngInject*/
  constructor($http, $location, $rootScope, Auth) {
    this.$http = $http;
    this.$root = $rootScope;
    this.id = $location.hash();
    this.isAdmin = Auth.isAdminSync;
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get(`/api/recruits/${this.id}`).then(responseRec => {
      this.fullrecruit = responseRec.data;
      this.recruit = this.fullrecruit['exams'] || {};
      let apef = this.fullrecruit.assignedPef || {};
      this.recruit.pef = apef.pefCode;
      this.recruit.recruiter = this.fullrecruit.recruiter;
      this.recruit.status = this.fullrecruit.status;
      this.recruit.dutyType = this.fullrecruit.dutyType;
      this.recruit.mcroc = this.fullrecruit.mcroc;
    });
  } //init

  saveDutyType() {
    let dt = this.fullrecruit.dutyType;

    if(dt.id.toString() ==="1") {
      dt.desc = 'DMR';
    }
    else {
      dt.desc = 'DMV';
    }

    this.$http.put(`/api/recruits/${this.id}`, this.fullrecruit).then(responseRec => {
      this.broadcastRecruit(this.fullrecruit);
    });
  } //

  broadcastRecruit(recr) {
    let profile = {id: recr._id, fullName: recr.fullName, age: recr.age.val, sex: recr.match.sex.val, status: recr.status,
                   ssn: recr.personal.ssn, pefCode:((recr.assignedPef || {}).pefCode || undefined), dutyType:((recr.dutyType || {}).desc || undefined)};
    this.$root.$broadcast('SELECT_RECRUIT', profile);
  }//

} //class

export default angular.module('mcrissDemoApp.exams', [uiRouter])
  .config(routes)
  .component('exams', {
    template: require('./exams.html'),
    controller: ExamsComponent,
    controllerAs: 'vm'
  })
  .name;
