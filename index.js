'use strict';

var bcrypt = require('bcrypt');
var nodefn = require('when/node');
var when = require('when');

var getValid = nodefn.lift(bcrypt.compare);
var hash = nodefn.lift(bcrypt.hash);

var DEFAULT_ROUNDS = 10;

function compare(password, hash){
  return getValid(password, hash)
    .then(function(valid){
      if(!valid){
        return when.reject(new Error('invalid'));
      }
      return valid;
    });
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
  getRounds: getRounds
};
