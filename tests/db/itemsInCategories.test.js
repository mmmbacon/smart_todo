const chai = require("chai");
chai.should();

const itemsInCategories = require('../../db/itemsInCategories');

describe('Get Category Count from Database', function() {

  const userId = 1;


  it('should return an array', function(done) {

    itemsInCategories(userId)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should NOT be an object', function(done) {

    itemsInCategories(userId)
      .then((res) => {
        res.should.not.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {

    itemsInCategories(userId)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, name, and count', function(done) {

    itemsInCategories(userId)
      .then((res) => {
        for (const item of res) {
          item.should.have.property('id');
          item.should.have.property('name');
          item.should.have.property('count');
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
