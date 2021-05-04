const chai = require("chai");
chai.should();

const mostRelevantCategory = require('../../db/mostRelevantCategory');

describe('Get Category Count from Database', function() {

  const userId = 1;


  it('should not return an array', function(done) {

    mostRelevantCategory(userId)
      .then((res) => {
        res.should.not.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should be an object', function(done) {

    mostRelevantCategory(userId)
      .then((res) => {
        res.should.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {

    mostRelevantCategory(userId)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, name, and count', function(done) {

    mostRelevantCategory(userId)
      .then((res) => {
        res.should.have.property('id');
        res.should.have.property('name');
        res.should.have.property('count');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an empty object if no properties are provided', function(done) {

    mostRelevantCategory()
      .then((res) => {
        res.should.deep.equal({});
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
