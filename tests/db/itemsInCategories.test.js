const chai = require("chai");
chai.should();

const itemsInCategories = require('../../db/itemsInCategories');

describe('Get Category Count from Database', function() {

  const userId = 1;


  it('should return an array', function(done) {

    itemsInCategories(userId, 'id', 'DESC')
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an array of length 3', function(done) {

    itemsInCategories(userId, 'id', 'DESC')
      .then((res) => {
        res.should.have.length(3);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should NOT be an object', function(done) {

    itemsInCategories(userId, 'name', 'ASC')
      .then((res) => {
        res.should.not.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {

    itemsInCategories(userId, 'count', 'DESC')
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, name, and item_count', function(done) {

    itemsInCategories(userId, 'id', 'DESC')
      .then((res) => {
        for (const item of res) {
          item.should.have.property('id');
          item.should.have.property('name');
          item.should.have.property('item_count');
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an empty array if no properties are provided', function(done) {

    itemsInCategories()
      .then((res) => {
        res.should.have.length(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
