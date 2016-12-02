'use strict';

describe('Component: PefviewComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.pefview'));

  var PefviewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PefviewComponent = $componentController('pefview', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
