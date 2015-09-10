'use strict';

var bcrypt = require('bcrypt');
var nodefn = require('when/node');
var when = require('when');

var hash = nodefn.lift(bcrypt.hash);

var DEFAULT_ROUNDS = 10;

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
  compare: nodefn.lift(bcrypt.compare),
  getRounds: getRounds
};
