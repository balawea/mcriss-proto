'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './candidateprofile.routes';

export class CandidateprofileComponent {
  $http;
  $location;
  recruit;
  id;

  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.$location = $location;
    this.id = $location.hash();

  } //ctor
    
  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/recruits/' + this.id).then(responseRec => {
      let fullrecruit = responseRec.data;
      this.recruit = fullrecruit['personal'] || {};
      this.recruit.age = {};
      this.recruit.age.val = fullrecruit.age.val;
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
