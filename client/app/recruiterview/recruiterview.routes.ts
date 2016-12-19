'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('recruiterview', {
      url: '/',
      template: '<recruiterview></recruiterview>'
    });
}
