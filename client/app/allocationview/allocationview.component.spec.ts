'use strict';

describe('Component: allocationview', function() {
  // load the component's module
  beforeEach(module('mcrissDemoApp.allocationview'));

  var allocationviewComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    allocationviewComponent = $componentController('allocationview', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
