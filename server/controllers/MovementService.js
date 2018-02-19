'use strict';

exports.addMovement = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Movement)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteMovement = function(args, res, next) {
  /**
   * parameters expected in the args:
  * movementId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getMovementById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * movementId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
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

exports.getMovements = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
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

exports.updateMovement = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Movement)
  **/
  // no response value expected for this operation
  res.end();
}

