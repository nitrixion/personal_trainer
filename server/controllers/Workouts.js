'use strict';

var url = require('url');


var Workouts = require('./WorkoutsService');


module.exports.addWorkout = function addWorkout (req, res, next) {
  Workouts.addWorkout(req.swagger.params, res, next);
};

module.exports.getCurrentUserWorkouts = function getCurrentUserWorkouts (req, res, next) {
  Workouts.getCurrentUserWorkouts(req.swagger.params, res, next);
};

module.exports.getWorkoutByOwner = function getWorkoutByOwner (req, res, next) {
  Workouts.getWorkoutByOwner(req.swagger.params, res, next);
};

module.exports.getWorkouts = function getWorkouts (req, res, next) {
  Workouts.getWorkouts(req.swagger.params, res, next);
};

module.exports.updateWorkout = function updateWorkout (req, res, next) {
  Workouts.updateWorkout(req.swagger.params, res, next);
};
