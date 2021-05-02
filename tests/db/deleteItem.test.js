const { expect } = require('chai');
const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.should();

const deleteItem = require('../../db/deleteItem');

describe('database', function() {

  const userId = 1;
  const itemId = 1;

  //Add new items into the database first!//

  it('should return an array of objects', function() {
    return deleteItem(userId, itemId).should.eventually.be.an('array');
  });

  it('should be 3 items long', function() {
    return deleteItem(userId, itemId).should.eventually.have.length.of(3);
  });

  it('should not be undefined', function() {
    return deleteItem(userId, itemId).should.eventually.not.be.undefined;
  });

  it('should contain the email and user password', function(done) {
    deleteItem(userId, itemId)
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

  it('should contain the id_, user_id, category_id, description, date_created and completed status', function(done) {

    deleteItem(userId, itemId)
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
