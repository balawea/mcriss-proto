'use strict';

describe('Component: PersonalComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.personal'));

  var PersonalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PersonalComponent = $componentController('personal', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
