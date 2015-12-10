'use strict';

var util = require('util');

var bcrypt = require('bcrypt');
var nodefn = require('when/node');
var when = require('when');

var getValid = nodefn.lift(bcrypt.compare);
var hash = nodefn.lift(bcrypt.hash);

var DEFAULT_ROUNDS = 10;

function MismatchError(message){
  Error.call(this);
  this.message = message;
  this.name = MismatchError.name;
  if(typeof Error.captureStackTrace === 'function'){
    Error.captureStackTrace(this, MismatchError);
  }
}
util.inherits(MismatchError, Error);

function throwOnInvalid(valid){
  if(!valid){
    return when.reject(new MismatchError('invalid'));
  } else {
    return valid;
  }
}

function compare(password, hash){
  return getValid(password, hash)
    .then(throwOnInvalid);
}

function getRounds(hash){
  return when.try(bcrypt.getRounds, hash);
}

function promisedHash(password, salt){
  if(!salt){
    salt = DEFAULT_ROUNDS;
  }
  return hash(password, salt);
}

module.exports = {
  hash: promisedHash,
  genSalt: nodefn.lift(bcrypt.genSalt),
  compare: compare,
  getRounds: getRounds,
  MISMATCH_ERROR: MismatchError
};
