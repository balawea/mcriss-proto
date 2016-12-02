'use strict';

describe('Component: ExamsComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.exams'));

  var ExamsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ExamsComponent = $componentController('exams', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
