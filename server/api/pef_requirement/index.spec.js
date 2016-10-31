'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pefRequirementCtrlStub = {
  index: 'pefRequirementCtrl.index',
  show: 'pefRequirementCtrl.show',
  create: 'pefRequirementCtrl.create',
  upsert: 'pefRequirementCtrl.upsert',
  patch: 'pefRequirementCtrl.patch',
  destroy: 'pefRequirementCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pefRequirementIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './pef_requirement.controller': pefRequirementCtrlStub
});

describe('PefRequirement API Router:', function() {
  it('should return an express router instance', function() {
    expect(pefRequirementIndex).to.equal(routerStub);
  });

  describe('GET /api/pef_requirements', function() {
    it('should route to pefRequirement.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'pefRequirementCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/pef_requirements/:id', function() {
    it('should route to pefRequirement.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'pefRequirementCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/pef_requirements', function() {
    it('should route to pefRequirement.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'pefRequirementCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/pef_requirements/:id', function() {
    it('should route to pefRequirement.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'pefRequirementCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/pef_requirements/:id', function() {
    it('should route to pefRequirement.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'pefRequirementCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/pef_requirements/:id', function() {
    it('should route to pefRequirement.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'pefRequirementCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
