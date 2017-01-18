'use strict';

var express = require('express');
var controller = require('./rs.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/children/:rs', controller.children);
router.get('/rs/:rs', controller.rs);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
