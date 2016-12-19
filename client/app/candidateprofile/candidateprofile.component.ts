'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './candidateprofile.routes';

export class CandidateprofileComponent {
  $http;
  $location;
  $state;
  root;
  recruit;
  id;

  /*@ngInject*/
  constructor($http, $location, $rootScope, $state) {
    this.$http = $http; 
    this.$location = $location;
    this.id = $location.hash();
    this.root = $rootScope;
    this.$state = $state;

    //if no hash (no applicant selected), go to recruiterview to choose an applicant.
    if (this.id==='')
      this.$state.go('recruiterview');

  } //ctor
    
  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(responseRec => {
      let fullrecruit = responseRec.data;
      let personal = 'personal';
      this.recruit = fullrecruit[personal] || {};
      this.recruit.age = { val: fullrecruit.age.val};
      this.recruit.status = fullrecruit.status;
      this.recruit.dob = fullrecruit.dob;
      this.recruit.fullName = fullrecruit.fullName;
      
      this.root.$broadcast('SELECT_RECRUIT', this.recruit);
    });
  } //init


}// class

export default angular.module('mcrissDemoApp.candidateprofile', [uiRouter])
  .config(routes)
  .component('candidateprofile', {
    template: require('./candidateprofile.html'),
    controller: CandidateprofileComponent,
    controllerAs: 'vm'
  })
  .name;
