'use strict';

describe('Component: RecruiterviewComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.recruiterview'));

  var RecruiterviewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    RecruiterviewComponent = $componentController('recruiterview', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
