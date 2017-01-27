'use strict';

describe('Directive: treeGrid', function() {
  // load the directive's module and view
  beforeEach(module('mcrissDemoApp.treeGrid'));
  beforeEach(module('app/treeGrid/treeGrid.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<tree-grid></tree-grid>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the treeGrid directive');
  }));
});
