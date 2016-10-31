'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('samplepef', {
      url: '/samplepef',
      template: '<samplepef></samplepef>'
    });
}
