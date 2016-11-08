'use strict';

describe('Component: PefDetailComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.pefDetail'));

  var PefDetailComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PefDetailComponent = $componentController('pefDetail', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
