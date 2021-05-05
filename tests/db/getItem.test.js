const chai = require("chai");
chai.should();

const getItem = require('../../db/getItem');

describe('Get Item from Database', function() {

  const userId = 1;
  const itemId = 1;

  it('should not return an array', function(done) {
    getItem(userId, itemId)
      .then((res) => {
        res.should.not.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should be an object', function(done) {
    getItem(userId, itemId)
      .then((res) => {
        res.should.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    getItem(userId, itemId)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('each item in the array should contain the expected properties', function(done) {
    getItem(userId, itemId)
      .then((res) => {
        res.should.have.property('item_id');
        res.should.have.property('item_description');
        res.should.have.property('date_created');
        res.should.have.property('priority');
        res.should.have.property('completed');
        res.should.have.property('category_id');
        res.should.have.property('category_name');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an empty array if no properties are provided', function(done) {

    getItem()
      .then((res) => {
        res.should.have.length(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
