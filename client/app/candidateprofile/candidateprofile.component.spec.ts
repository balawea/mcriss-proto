'use strict';

describe('Component: CandidateprofileComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissDemoApp.candidateprofile'));

  var CandidateprofileComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CandidateprofileComponent = $componentController('candidateprofile', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
