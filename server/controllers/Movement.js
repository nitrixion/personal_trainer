'use strict';

var url = require('url');


var Movement = require('./MovementService');


module.exports.addMovement = function addMovement (req, res, next) {
  Movement.addMovement(req.swagger.params, res, next);
};

module.exports.deleteMovement = function deleteMovement (req, res, next) {
  Movement.deleteMovement(req.swagger.params, res, next);
};

module.exports.getMovementById = function getMovementById (req, res, next) {
  Movement.getMovementById(req.swagger.params, res, next);
};

module.exports.getMovements = function getMovements (req, res, next) {
  Movement.getMovements(req.swagger.params, res, next);
};

module.exports.updateMovement = function updateMovement (req, res, next) {
  Movement.updateMovement(req.swagger.params, res, next);
};
