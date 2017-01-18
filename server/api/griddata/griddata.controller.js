/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/griddata              ->  index
 * POST    /api/griddata              ->  create
 * GET     /api/griddata/:id          ->  show
 * PUT     /api/griddata/:id          ->  upsert
 * PATCH   /api/griddata/:id          ->  patch
 * DELETE  /api/griddata/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Griddata from './griddata.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Griddatas
export function index(req, res) {
  return Griddata.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Griddata from the DB
export function show(req, res) {
  return Griddata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Griddata in the DB
export function create(req, res) {
  return Griddata.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Griddata in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Griddata.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Griddata in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Griddata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Griddata from the DB
export function destroy(req, res) {
  return Griddata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
