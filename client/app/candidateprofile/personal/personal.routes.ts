'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('personal', {
      url: '/candidateprofile/personal',
      template: '<personal></personal>'
    });
}
