'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './pefDetail.routes';

export class PefDetailComponent {
  id;
  $http;
  pef;
  errors = {};
  req = {};


  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.id = $location.hash();
  } //ctor

  /*@ngInject*/
  $onInit() {
    this.$http.get('/api/pefRequirements/' + this.id).then(response => {
      this.pef = response.data;
      this.req = this.pef.requirements;
    });
  }   //oninit

/*
  register(form) {
    if(form.$valid) {
      return 1;
    };
  }
*/

} //class

export default angular.module('mcrissDemoApp.pefDetail', [uiRouter])
  .config(routes)
  .component('pefDetail', {
    template: require('./pefDetail.html'),
    controller: PefDetailComponent,
    controllerAs: 'vm'
  })
  .name;
