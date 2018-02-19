'use strict';

var url = require('url');


var Program = require('./ProgramService');


module.exports.addProgram = function addProgram (req, res, next) {
  Program.addProgram(req.swagger.params, res, next);
};

module.exports.deleteProgram = function deleteProgram (req, res, next) {
  Program.deleteProgram(req.swagger.params, res, next);
};

module.exports.getCurrentProgram = function getCurrentProgram (req, res, next) {
  Program.getCurrentProgram(req.swagger.params, res, next);
};

module.exports.getProgramById = function getProgramById (req, res, next) {
  Program.getProgramById(req.swagger.params, res, next);
};

module.exports.getPrograms = function getPrograms (req, res, next) {
  Program.getPrograms(req.swagger.params, res, next);
};

module.exports.updateProgram = function updateProgram (req, res, next) {
  Program.updateProgram(req.swagger.params, res, next);
};
