'use strict';

exports.addExercise = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Exercise)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteExercise = function(args, res, next) {
  /**
   * parameters expected in the args:
  * exerciseId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getExerciseById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * exerciseId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "weightType" : { },
  "reps" : 123,
  "sets" : 123,
  "repType" : { },
  "weight" : 123,
  "movements" : [ {
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getExercises = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "weightType" : { },
  "reps" : 123,
  "sets" : 123,
  "repType" : { },
  "weight" : 123,
  "movements" : [ {
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateExercise = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Exercise)
  **/
  // no response value expected for this operation
  res.end();
}

