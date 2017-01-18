'use strict';

var app = require('../..');
import request from 'supertest';

var newRs;

describe('Rs API:', function() {
  describe('GET /api/rss', function() {
    var rss;

    beforeEach(function(done) {
      request(app)
        .get('/api/rss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(rss).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/rss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rss')
        .send({
          name: 'New Rs',
          info: 'This is the brand new rs!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newRs = res.body;
          done();
        });
    });

    it('should respond with the newly created rs', function() {
      expect(newRs.name).to.equal('New Rs');
      expect(newRs.info).to.equal('This is the brand new rs!!!');
    });
  });

  describe('GET /api/rss/:id', function() {
    var rs;

    beforeEach(function(done) {
      request(app)
        .get(`/api/rss/${newRs._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rs = res.body;
          done();
        });
    });

    afterEach(function() {
      rs = {};
    });

    it('should respond with the requested rs', function() {
      expect(rs.name).to.equal('New Rs');
      expect(rs.info).to.equal('This is the brand new rs!!!');
    });
  });

  describe('PUT /api/rss/:id', function() {
    var updatedRs;

    beforeEach(function(done) {
      request(app)
        .put(`/api/rss/${newRs._id}`)
        .send({
          name: 'Updated Rs',
          info: 'This is the updated rs!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedRs = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRs = {};
    });

    it('should respond with the original rs', function() {
      expect(updatedRs.name).to.equal('New Rs');
      expect(updatedRs.info).to.equal('This is the brand new rs!!!');
    });

    it('should respond with the updated rs on a subsequent GET', function(done) {
      request(app)
        .get(`/api/rss/${newRs._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let rs = res.body;

          expect(rs.name).to.equal('Updated Rs');
          expect(rs.info).to.equal('This is the updated rs!!!');

          done();
        });
    });
  });

  describe('PATCH /api/rss/:id', function() {
    var patchedRs;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/rss/${newRs._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Rs' },
          { op: 'replace', path: '/info', value: 'This is the patched rs!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedRs = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedRs = {};
    });

    it('should respond with the patched rs', function() {
      expect(patchedRs.name).to.equal('Patched Rs');
      expect(patchedRs.info).to.equal('This is the patched rs!!!');
    });
  });

  describe('DELETE /api/rss/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/rss/${newRs._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rs does not exist', function(done) {
      request(app)
        .delete(`/api/rss/${newRs._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
