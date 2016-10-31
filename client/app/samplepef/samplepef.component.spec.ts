'use strict';

describe('Component: SamplepefComponent', function() {
  // load the controller's module
  beforeEach(module('mcrissProtoApp.samplepef'));

  var SamplepefComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SamplepefComponent = $componentController('samplepef', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
