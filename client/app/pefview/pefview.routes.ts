'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pefview', {
      url: '/pefview',
      template: '<pefview></pefview>'
    });
}
