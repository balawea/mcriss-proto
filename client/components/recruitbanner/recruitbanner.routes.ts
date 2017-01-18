'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('recruitbanner', {
      url: '/recruitbanner',
      template: '<recruitbanner></recruitbanner>'
    });
}
