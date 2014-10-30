'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var bcrypt = require('../');

describe('bcrypt-as-promised', function(){

  var goodPassword = 'aHBeRy85cNK*zubPPkKylAKFsBG@N&v&';
  var goodHash = '$2a$10$NRSrC8ldvcmBs5/OHX5X/.WaSr1uiK8kSPuhNYXLkmLck8lTScivG';

  it('should hash a password', function(){
    return expect(bcrypt.hash(goodPassword, 10))
      .to.eventually.be.an('string');
  });

  it('should generate a salt', function(){
    return expect(bcrypt.genSalt(10))
      .to.eventually.be.an('string');
  });

  it('should compare a password againts its hash', function(){
    return expect(bcrypt.compare(goodPassword, goodHash))
      .to.eventually.equal(true);
  });

  it('should error on an invalid password', function(){
    var badPassword = 'a BAD password';
    return expect(bcrypt.compare(badPassword, goodHash))
      .to.eventually.be.rejectedWith(Error);
  });

  it('should get number of rounds from a hash', function(){
    return expect(bcrypt.getRounds(goodHash))
      .to.eventually.equal(10);
  });

});
