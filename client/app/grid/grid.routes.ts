'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('grid', {
      url: '/grid',
      template: '<grid></grid>'
    });
}
