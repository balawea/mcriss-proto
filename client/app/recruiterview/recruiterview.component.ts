'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './recruiterview.routes';

export class RecruiterviewComponent {
  $http;
  recruits = [];

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/recruits').then(response => {
      this.recruits = response.data;
    });
  }
}

export default angular.module('mcrissDemoApp.recruiterview', [uiRouter])
  .config(routes)
  .component('recruiterview', {
    template: require('./recruiterview.html'),
    controller: RecruiterviewComponent,
    controllerAs: 'vm'
  })
  .name;
