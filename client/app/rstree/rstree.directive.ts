'use strict';
const angular = require('angular');

export default angular.module('mcrissDemoApp.rstree', [])
  .directive('rstree', function() {
    return {
      template: require('./rstree.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;

