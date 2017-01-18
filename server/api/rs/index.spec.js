'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var rsCtrlStub = {
  index: 'rsCtrl.index',
  show: 'rsCtrl.show',
  create: 'rsCtrl.create',
  upsert: 'rsCtrl.upsert',
  patch: 'rsCtrl.patch',
  destroy: 'rsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var rsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './rs.controller': rsCtrlStub
});

describe('Rs API Router:', function() {
  it('should return an express router instance', function() {
    expect(rsIndex).to.equal(routerStub);
  });

  describe('GET /api/rss', function() {
    it('should route to rs.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'rsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/rss/:id', function() {
    it('should route to rs.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'rsCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/rss', function() {
    it('should route to rs.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'rsCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/rss/:id', function() {
    it('should route to rs.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'rsCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/rss/:id', function() {
    it('should route to rs.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'rsCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/rss/:id', function() {
    it('should route to rs.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'rsCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
