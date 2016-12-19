'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class PageheadComponent {
  recruiter;
  id;
//  recr;

  /*@ngInject*/
  constructor($location, $scope) {
    'ngInject';
    this.id = $location.hash();

      $scope.$on('SELECT_RECRUIT', function(event, recruit){
        $scope.recr = {};

        $scope.recr.fullName = recruit.fullName;
        $scope.recr.dob = recruit.dob;
        $scope.recr.age = {val: recruit.age.val};
        $scope.recr.ssn = recruit.ssn;
        $scope.recr.status = recruit.status;
      });

  } //ctor
  
  
} //CLASS

export default angular.module('directives.pagehead', [])
  .component('pagehead', {
    template: require('./pagehead.html'),
    controller: PageheadComponent,
    controllerAs: 'vm'
  })
  .name;
