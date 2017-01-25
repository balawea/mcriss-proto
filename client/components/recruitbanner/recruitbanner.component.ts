'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class RecruitBannerComponent {
  /*@ngInject*/
  constructor($scope, $rootScope) {

    $scope.$on('SELECT_RECRUIT', function(event, recruit) {
      console.info('Recruit banner broadcast received');
      $scope.recr = recruit;
    });
    
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $scope.state = toState.name;
    });
  } //ctor

} //CLASS

export default angular.module('directives.recruitbanner', [])
  .component('recruitbanner', {
    template: require('./recruitbanner.html'),
    controller: RecruitBannerComponent//,
//    controllerAs: 'vm'
  })
  .name;
