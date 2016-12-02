'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('recruiterview', {
      url: '/recruiterview',
      template: '<recruiterview></recruiterview>'
    });
}
