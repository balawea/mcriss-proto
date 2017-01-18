'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var griddataCtrlStub = {
  index: 'griddataCtrl.index',
  show: 'griddataCtrl.show',
  create: 'griddataCtrl.create',
  upsert: 'griddataCtrl.upsert',
  patch: 'griddataCtrl.patch',
  destroy: 'griddataCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var griddataIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './griddata.controller': griddataCtrlStub
});

describe('Griddata API Router:', function() {
  it('should return an express router instance', function() {
    expect(griddataIndex).to.equal(routerStub);
  });

  describe('GET /api/griddata', function() {
    it('should route to griddata.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'griddataCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/griddata/:id', function() {
    it('should route to griddata.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'griddataCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/griddata', function() {
    it('should route to griddata.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'griddataCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/griddata/:id', function() {
    it('should route to griddata.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'griddataCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/griddata/:id', function() {
    it('should route to griddata.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'griddataCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/griddata/:id', function() {
    it('should route to griddata.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'griddataCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
