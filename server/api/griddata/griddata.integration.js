'use strict';

var app = require('../..');
import request from 'supertest';

var newGriddata;

describe('Griddata API:', function() {
  describe('GET /api/griddata', function() {
    var griddatas;

    beforeEach(function(done) {
      request(app)
        .get('/api/griddata')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          griddatas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(griddatas).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/griddata', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/griddata')
        .send({
          name: 'New Griddata',
          info: 'This is the brand new griddata!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newGriddata = res.body;
          done();
        });
    });

    it('should respond with the newly created griddata', function() {
      expect(newGriddata.name).to.equal('New Griddata');
      expect(newGriddata.info).to.equal('This is the brand new griddata!!!');
    });
  });

  describe('GET /api/griddata/:id', function() {
    var griddata;

    beforeEach(function(done) {
      request(app)
        .get(`/api/griddata/${newGriddata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          griddata = res.body;
          done();
        });
    });

    afterEach(function() {
      griddata = {};
    });

    it('should respond with the requested griddata', function() {
      expect(griddata.name).to.equal('New Griddata');
      expect(griddata.info).to.equal('This is the brand new griddata!!!');
    });
  });

  describe('PUT /api/griddata/:id', function() {
    var updatedGriddata;

    beforeEach(function(done) {
      request(app)
        .put(`/api/griddata/${newGriddata._id}`)
        .send({
          name: 'Updated Griddata',
          info: 'This is the updated griddata!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedGriddata = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGriddata = {};
    });

    it('should respond with the original griddata', function() {
      expect(updatedGriddata.name).to.equal('New Griddata');
      expect(updatedGriddata.info).to.equal('This is the brand new griddata!!!');
    });

    it('should respond with the updated griddata on a subsequent GET', function(done) {
      request(app)
        .get(`/api/griddata/${newGriddata._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let griddata = res.body;

          expect(griddata.name).to.equal('Updated Griddata');
          expect(griddata.info).to.equal('This is the updated griddata!!!');

          done();
        });
    });
  });

  describe('PATCH /api/griddata/:id', function() {
    var patchedGriddata;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/griddata/${newGriddata._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Griddata' },
          { op: 'replace', path: '/info', value: 'This is the patched griddata!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedGriddata = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedGriddata = {};
    });

    it('should respond with the patched griddata', function() {
      expect(patchedGriddata.name).to.equal('Patched Griddata');
      expect(patchedGriddata.info).to.equal('This is the patched griddata!!!');
    });
  });

  describe('DELETE /api/griddata/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/griddata/${newGriddata._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when griddata does not exist', function(done) {
      request(app)
        .delete(`/api/griddata/${newGriddata._id}`)
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
