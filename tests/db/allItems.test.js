const chai = require("chai");
chai.should();

const allItems = require('../../db/allItems');

describe('Get All Items from Database', function() {

  const userId = 1;

  it('should return an array of objects', function(done) {
    allItems(userId)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {

    allItems(userId)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('each item in the array should contain the expected properties', function(done) {
    allItems(userId)
      .then((res) => {
        for (const item of res) {
          item.should.have.property('item_id');
          item.should.have.property('item_description');
          item.should.have.property('date_created');
          item.should.have.property('priority');
          item.should.have.property('completed');
          item.should.have.property('category_id');
          item.should.have.property('category_name');
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
