'use strict';

var bcrypt = require('bcrypt');
var nodefn = require('when/node');
var when = require('when');

var getValid = nodefn.lift(bcrypt.compare);

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

module.exports = {
  hash: nodefn.lift(bcrypt.hash),
  genSalt: nodefn.lift(bcrypt.genSalt),
  compare: compare,
  getRounds: getRounds
};
