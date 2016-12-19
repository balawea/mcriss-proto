'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './personal.routes';

export class PersonalComponent {
  app;
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
        
      this.recruit = fullrecruit.personal || {};
      this.recruit.age = {val: fullrecruit.age.val};
      this.recruit.dob = fullrecruit.dob;
      this.recruit.formattedAddr = fullrecruit.faddress;
      this.recruit.formattedHor = fullrecruit.fhor;
      this.recruit.firstName = fullrecruit.firstName;
      this.recruit.lastName = fullrecruit.lastName;
      this.recruit.middleName = fullrecruit.middleName;
    });
  } //init
} //class

export default angular.module('mcrissDemoApp.personal', [uiRouter])
  .config(routes)
  .component('personal', {
    template: require('./personal.html'),
    controller: PersonalComponent,
    controllerAs: 'c'
  })
  .name;
