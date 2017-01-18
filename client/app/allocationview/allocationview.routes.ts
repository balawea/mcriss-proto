'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('allocationview', {
      url: '/allocationview',
      template: '<allocationview></allocationview>'
    });
}
