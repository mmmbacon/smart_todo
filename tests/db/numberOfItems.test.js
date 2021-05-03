const chai = require("chai");
chai.should();

const itemsInCategories = require('../../db/itemsInCategories');

describe('Get Category Count from Database', function() {

  const userId = 1;


  it('should not return an array', function(done) {

    const categoryId = 1;

    itemsInCategories(userId, categoryId)
      .then((res) => {
        res.should.not.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should be an object', function(done) {

    const categoryId = 2;

    itemsInCategories(userId, categoryId)
      .then((res) => {
        res.should.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {

    const categoryId = 3;

    itemsInCategories(userId, categoryId)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, name, and count', function(done) {

    const categoryId = 4;

    itemsInCategories(userId, categoryId)
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

});
