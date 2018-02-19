'use strict';

exports.addProgram = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Program)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteProgram = function(args, res, next) {
  /**
   * parameters expected in the args:
  * programId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getCurrentProgram = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "notes" : "aeiou",
  "trainer" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "workouts" : [ {
    "owner" : "",
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
  } ],
  "start" : "2000-01-23T04:56:07.000+00:00",
  "end" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "trainee" : "",
  "complete" : true,
  "performances" : [ {
    "id" : 123456789,
    "performances" : [ {
      "weightType" : "",
      "reps" : 123,
      "exerciseId" : 123456789,
      "sets" : 123,
      "repType" : "",
      "weight" : 123,
      "id" : 123456789
    } ],
    "programId" : 123456789
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProgramById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * programId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "notes" : "aeiou",
  "trainer" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "workouts" : [ {
    "owner" : "",
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
  } ],
  "start" : "2000-01-23T04:56:07.000+00:00",
  "end" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "trainee" : "",
  "complete" : true,
  "performances" : [ {
    "id" : 123456789,
    "performances" : [ {
      "weightType" : "",
      "reps" : 123,
      "exerciseId" : 123456789,
      "sets" : 123,
      "repType" : "",
      "weight" : 123,
      "id" : 123456789
    } ],
    "programId" : 123456789
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPrograms = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "notes" : "aeiou",
  "trainer" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "roles" : [ { } ],
    "id" : 123456789,
    "email" : "aeiou",
    "username" : "aeiou"
  },
  "workouts" : [ {
    "owner" : "",
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
  } ],
  "start" : "2000-01-23T04:56:07.000+00:00",
  "end" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "trainee" : "",
  "complete" : true,
  "performances" : [ {
    "id" : 123456789,
    "performances" : [ {
      "weightType" : "",
      "reps" : 123,
      "exerciseId" : 123456789,
      "sets" : 123,
      "repType" : "",
      "weight" : 123,
      "id" : 123456789
    } ],
    "programId" : 123456789
  } ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateProgram = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Program)
  **/
  // no response value expected for this operation
  res.end();
}

