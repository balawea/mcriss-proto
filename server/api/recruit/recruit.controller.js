/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/recruits              ->  index
 * POST    /api/recruits              ->  create
 * GET     /api/recruits/:id          ->  show
 * PUT     /api/recruits/:id          ->  upsert
 * PATCH   /api/recruits/:id          ->  patch
 * DELETE  /api/recruits/:id          ->  destroy


 */

'use strict';

import jsonpatch from 'fast-json-patch';
import recruit from './recruit.model';

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

// Gets a list of recruits
export function index(req, res) {
  return recruit.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get lite recruit objects for recruiterview tiles
export function lite(req, res) {
  return recruit.lite().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get lite recruits under a specific recruiter
export function findbyrec(req, res) {
  var recId = req.params.recid;

  return recruit.findbyrec(recId).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));

}

// Gets a single recruit from the DB
export function show(req, res) {
  return recruit.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new recruit in the DB
export function create(req, res) {
  return recruit.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given recruit in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return recruit.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing recruit in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return recruit.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a recruit from the DB
export function destroy(req, res) {
  return recruit.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
