'use strict';

exports.addWorkout = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Workout)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getCurrentUserWorkouts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workoutId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "owner" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "notes" : "aeiou",
  "exercises" : [ {
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
  } ],
  "public" : true,
  "name" : "aeiou",
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

exports.getWorkoutByOwner = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "notes" : "aeiou",
  "exercises" : [ {
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
  } ],
  "public" : true,
  "name" : "aeiou",
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

exports.getWorkouts = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "notes" : "aeiou",
  "exercises" : [ {
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
  } ],
  "public" : true,
  "name" : "aeiou",
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

exports.updateWorkout = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Workout)
  **/
  // no response value expected for this operation
  res.end();
}

