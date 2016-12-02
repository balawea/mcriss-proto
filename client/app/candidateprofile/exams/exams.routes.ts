'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('exams', {
      url: '/candidateprofile/exams',
      template: '<exams></exams>'
    });
}
