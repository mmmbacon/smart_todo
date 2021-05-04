const chai = require("chai");
chai.should();

const createItem = require('../../db/createItem');

describe('Create Item in Database', function() {

  const userId = 1;
  const categoryName = 'Books';
  const description = 'Watch Lord of the Rings';
  const priority = 0;

  it('should return an array', function(done) {
    createItem(userId, categoryName, description, priority)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an array of length 17', function(done) {
    createItem(userId, categoryName, description, priority)
      .then((res) => {
        res.should.have.length(17);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    createItem(userId, categoryName, description, priority)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, user_id, category_id, category_name, description, date_created, date_due, priority, and completed status', function(done) {
    createItem(userId, categoryName, description, priority)
      .then((res) => {
        for (const item of res) {
          item.should.have.property('item_id');
          item.should.have.property('item_description');
          item.should.have.property('date_created');
          item.should.have.property('date_due');
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

  it('should return an empty array if no properties are provided in the update', function(done) {

    createItem()
      .then((res) => {
        res.should.have.length(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
