'use strict';

var url = require('url');


var Exercise = require('./ExerciseService');


module.exports.addExercise = function addExercise (req, res, next) {
  Exercise.addExercise(req.swagger.params, res, next);
};

module.exports.deleteExercise = function deleteExercise (req, res, next) {
  Exercise.deleteExercise(req.swagger.params, res, next);
};

module.exports.getExerciseById = function getExerciseById (req, res, next) {
  Exercise.getExerciseById(req.swagger.params, res, next);
};

module.exports.getExercises = function getExercises (req, res, next) {
  Exercise.getExercises(req.swagger.params, res, next);
};

module.exports.updateExercise = function updateExercise (req, res, next) {
  Exercise.updateExercise(req.swagger.params, res, next);
};
