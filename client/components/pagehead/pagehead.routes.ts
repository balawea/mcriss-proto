'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('pagehead', {
      url: '/pagehead',
      template: '<pagehead></pagehead>'
    });
}
