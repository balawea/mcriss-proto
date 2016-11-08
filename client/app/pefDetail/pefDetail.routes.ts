'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pefDetail', {
      url: '/pefDetail',
      template: '<pef-detail></pef-detail>'
    });
}
