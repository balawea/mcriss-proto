'use strict';

describe('Component: PageheadComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.pagehead'));

  var PageheadComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PageheadComponent = $componentController('pagehead', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
