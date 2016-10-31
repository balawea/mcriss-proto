'use strict';

var app = require('../..');
import request from 'supertest';

var newPefRequirement;

describe('PefRequirement API:', function() {
  describe('GET /api/pef_requirements', function() {
    var pefRequirements;

    beforeEach(function(done) {
      request(app)
        .get('/api/pef_requirements')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          pefRequirements = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(pefRequirements).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/pef_requirements', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pef_requirements')
        .send({
          name: 'New PefRequirement',
          info: 'This is the brand new pefRequirement!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPefRequirement = res.body;
          done();
        });
    });

    it('should respond with the newly created pefRequirement', function() {
      expect(newPefRequirement.name).to.equal('New PefRequirement');
      expect(newPefRequirement.info).to.equal('This is the brand new pefRequirement!!!');
    });
  });

  describe('GET /api/pef_requirements/:id', function() {
    var pefRequirement;

    beforeEach(function(done) {
      request(app)
        .get(`/api/pef_requirements/${newPefRequirement._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          pefRequirement = res.body;
          done();
        });
    });

    afterEach(function() {
      pefRequirement = {};
    });

    it('should respond with the requested pefRequirement', function() {
      expect(pefRequirement.name).to.equal('New PefRequirement');
      expect(pefRequirement.info).to.equal('This is the brand new pefRequirement!!!');
    });
  });

  describe('PUT /api/pef_requirements/:id', function() {
    var updatedPefRequirement;

    beforeEach(function(done) {
      request(app)
        .put(`/api/pef_requirements/${newPefRequirement._id}`)
        .send({
          name: 'Updated PefRequirement',
          info: 'This is the updated pefRequirement!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPefRequirement = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPefRequirement = {};
    });

    it('should respond with the original pefRequirement', function() {
      expect(updatedPefRequirement.name).to.equal('New PefRequirement');
      expect(updatedPefRequirement.info).to.equal('This is the brand new pefRequirement!!!');
    });

    it('should respond with the updated pefRequirement on a subsequent GET', function(done) {
      request(app)
        .get(`/api/pef_requirements/${newPefRequirement._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let pefRequirement = res.body;

          expect(pefRequirement.name).to.equal('Updated PefRequirement');
          expect(pefRequirement.info).to.equal('This is the updated pefRequirement!!!');

          done();
        });
    });
  });

  describe('PATCH /api/pef_requirements/:id', function() {
    var patchedPefRequirement;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/pef_requirements/${newPefRequirement._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched PefRequirement' },
          { op: 'replace', path: '/info', value: 'This is the patched pefRequirement!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPefRequirement = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPefRequirement = {};
    });

    it('should respond with the patched pefRequirement', function() {
      expect(patchedPefRequirement.name).to.equal('Patched PefRequirement');
      expect(patchedPefRequirement.info).to.equal('This is the patched pefRequirement!!!');
    });
  });

  describe('DELETE /api/pef_requirements/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/pef_requirements/${newPefRequirement._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pefRequirement does not exist', function(done) {
      request(app)
        .delete(`/api/pef_requirements/${newPefRequirement._id}`)
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
