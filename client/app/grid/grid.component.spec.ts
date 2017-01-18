'use strict';

describe('Component: GridComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.grid'));

  var GridComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GridComponent = $componentController('grid', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
