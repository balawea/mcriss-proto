'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var recruitCtrlStub = {
  index: 'recruitCtrl.index',
  show: 'recruitCtrl.show',
  create: 'recruitCtrl.create',
  upsert: 'recruitCtrl.upsert',
  patch: 'recruitCtrl.patch',
  destroy: 'recruitCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var recruitIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './recruit.controller': recruitCtrlStub
});

describe('recruit API Router:', function() {
  it('should return an express router instance', function() {
    expect(recruitIndex).to.equal(routerStub);
  });

  describe('GET /api/recruits', function() {
    it('should route to recruit.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'recruitCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/recruits/:id', function() {
    it('should route to recruit.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'recruitCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/recruits', function() {
    it('should route to recruit.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'recruitCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/recruits/:id', function() {
    it('should route to recruit.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'recruitCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/recruits/:id', function() {
    it('should route to recruit.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'recruitCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/recruits/:id', function() {
    it('should route to recruit.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'recruitCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
