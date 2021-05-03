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

  it('should contain the id, user_id, category_id, description, date_created, date_due, priority, and completed status', function(done) {

    getItem(userId, itemId)
      .then((res) => {
        res.should.have.property('id');
        res.should.have.property('user_id');
        res.should.have.property('category_id');
        res.should.have.property('description');
        res.should.have.property('date_created');
        res.should.have.property('completed');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
