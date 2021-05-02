const chai = require("chai");
chai.should();

const createItem = require('../../db/createItem');

describe('database', function() {

  const userId = 1;
  const categoryId = 0;
  const description = 'Watch Lord of the Rings';
  const priority = 0;

  it('should return an array', function(done) {
    createItem(userId, categoryId, description, priority)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an array 4 items long', function(done) {
    createItem(userId, categoryId, description, priority)
      .then((res) => {
        res.should.have.length(6);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    createItem(userId, categoryId, description, priority)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, user_id, category_id, description, date_created, date_due, priority, and completed status', function(done) {
    createItem(userId, categoryId, description, priority)
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
