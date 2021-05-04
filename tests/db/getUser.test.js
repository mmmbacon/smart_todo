const chai = require("chai");
chai.should();

const getUser = require('../../db/getUser');

describe('Get Item from Database', function() {

  const email = 'sarah.worthington@hotmail.com';

  it('should not return an array', function(done) {
    getUser(email)
      .then((res) => {
        res.should.not.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should be an object', function(done) {
    getUser(email)
      .then((res) => {
        res.should.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    getUser(email)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the email, first_name and last_name', function(done) {

    getUser(email)
      .then((res) => {
        res.should.have.property('email');
        res.should.have.property('first_name');
        res.should.have.property('last_name');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an empty object if no properties are provided', function(done) {

    getUser()
      .then((res) => {
        res.should.deep.equal({});
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
