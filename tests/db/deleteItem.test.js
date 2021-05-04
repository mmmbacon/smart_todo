const chai = require("chai");
chai.should();

const deleteItem = require('../../db/deleteItem');

describe('Delete Item from Database', function() {

  const userId = 1;
  const itemId = 1;

  //Add new items into the database first!//

  it('should return an array of objects', function(done) {
    deleteItem(userId, itemId)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should be 14 items long', function(done) {
    deleteItem(userId, itemId)
      .then((res) => {
        res.should.have.length(14);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    deleteItem(userId, itemId)
      .then((res) => {
        res.should.not.be.undefined;
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

  it('should return an empty array if no properties are provided', function(done) {

    deleteItem()
      .then((res) => {
        res.should.have.length(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
