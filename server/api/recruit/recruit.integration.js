'use strict';

var app = require('../..');
import request from 'supertest';

var newRecruit;

describe('Recruit API:', function() {
  describe('GET /api/recruits', function() {
    var recruits;

    beforeEach(function(done) {
      request(app)
        .get('/api/recruits')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          recruits = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(recruits).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/recruits', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/recruits')
        .send({
          name: 'New Recruit',
          info: 'This is the brand new recruit!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newRecruit = res.body;
          done();
        });
    });

    it('should respond with the newly created recruit', function() {
      expect(newRecruit.name).to.equal('New Recruit');
      expect(newRecruit.info).to.equal('This is the brand new recruit!!!');
    });
  });

  describe('GET /api/recruits/:id', function() {
    var recruit;

    beforeEach(function(done) {
      request(app)
        .get(`/api/recruits/${newRecruit._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          recruit = res.body;
          done();
        });
    });

    afterEach(function() {
      recruit = {};
    });

    it('should respond with the requested recruit', function() {
      expect(recruit.name).to.equal('New recruit');
      expect(recruit.info).to.equal('This is the brand new recruit!!!');
    });
  });

  describe('PUT /api/recruits/:id', function() {
    var updatedRecruit;

    beforeEach(function(done) {
      request(app)
        .put(`/api/recruits/${newRecruit._id}`)
        .send({
          name: 'Updated Recruit',
          info: 'This is the updated recruit!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedRecruit = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRecruit = {};
    });

    it('should respond with the original recruit', function() {
      expect(updatedRecruit.name).to.equal('New Recruit');
      expect(updatedRecruit.info).to.equal('This is the brand new Recruit!!!');
    });

    it('should respond with the updated recruit on a subsequent GET', function(done) {
      request(app)
        .get(`/api/recruits/${newRecruit._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let recruit = res.body;

          expect(recruit.name).to.equal('Updated Recruit');
          expect(recruit.info).to.equal('This is the updated recruit!!!');

          done();
        });
    });
  });

  describe('PATCH /api/recruits/:id', function() {
    var patchedRecruit;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/recruits/${newRecruit._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Recruit' },
          { op: 'replace', path: '/info', value: 'This is the patched recruit!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedRecruit = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedRecruit = {};
    });

    it('should respond with the patched recruit', function() {
      expect(patchedRecruit.name).to.equal('Patched Recruit');
      expect(patchedRecruit.info).to.equal('This is the patched recruit!!!');
    });
  });

  describe('DELETE /api/recruits/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/recruits/${newRecruit._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when recruit does not exist', function(done) {
      request(app)
        .delete(`/api/recruits/${newRecruit._id}`)
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
