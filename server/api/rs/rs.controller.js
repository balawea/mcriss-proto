/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/rss              ->  index
 * POST    /api/rss              ->  create
 * GET     /api/rss/:id          ->  show
 * PUT     /api/rss/:id          ->  upsert
 * PATCH   /api/rss/:id          ->  patch
 * DELETE  /api/rss/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Rs from './rs.model';


// Gets a list of the selected Rss and its children
export function children(req, res) {
  var rsId = req.params.rs;

  return Rs.children(rsId).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets an rs by the rs name
export function rs(req, res) {
  var rsName = req.params.rs;

  return Rs.rs(rsName).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

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

// Gets a list of Rss
export function index(req, res) {
  return Rs.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Rs from the DB
export function show(req, res) {
  return Rs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Rs in the DB
export function create(req, res) {
  return Rs.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Rs in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Rs.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Rs in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Rs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Rs from the DB
export function destroy(req, res) {
  return Rs.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
