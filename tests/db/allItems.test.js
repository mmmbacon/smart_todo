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
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the email and user password', function(done) {
    allItems(userId)
      .then((res) => {
        for (const item of res) {
          item.should.have.property('email');
          item.should.have.property('password');
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('an item in the array should contain the id_, user_id, category_id, description, date_created and completed status', function(done) {
    allItems(userId)
      .then((res) => {
        for (const item of res) {
          item.should.have.property('id');
          item.should.have.property('user_id');
          item.should.have.property('category_id');
          item.should.have.property('description');
          item.should.have.property('date_created');
          item.should.have.property('completed');
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
