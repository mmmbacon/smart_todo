const chai = require("chai");
chai.should();

const updateItem = require('../../db/updateItem');

describe('Get Item from Database', function() {

  const userId = 1;
  const itemId = 1;
  const options = {
    description : 'This is a description',
    date_due: '2020-02-05',
    category: 'Books',
    priority: 3,
    completed: true
  };

  it('should return an array', function(done) {
    updateItem(userId, itemId, options.category, options.description, options.completed, options.date_due, options.priority)
      .then((res) => {
        res.should.be.an('array');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be an object', function(done) {
    updateItem(userId, itemId, options.category, options.description, options.completed, options.date_due, options.priority)
      .then((res) => {
        res.should.not.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not be undefined', function(done) {
    updateItem(userId, itemId, options.category, options.description, options.completed, options.date_due, options.priority)
      .then((res) => {
        res.should.not.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should contain the id, user_id, category_id, description, date_created, date_due, priority, and completed status', function(done) {

    updateItem(userId, itemId, options.category, options.description, options.completed, options.date_due, options.priority)
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

  it('should still work if not all properties are provided in the update', function(done) {

    updateItem(userId, itemId, options.category)
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

    updateItem()
      .then((res) => {
        res.should.have.length(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

});
