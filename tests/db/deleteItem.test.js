const { expect } = require('chai');
const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.should();

const deleteItem = require('../../db/deleteItem');

describe('database', function() {

  const userId = 1;
  const itemId = 1;

  it('should return an array of objects', function() {
    return deleteItem(userId, itemId).should.eventually.be.an('array');
  });

  it('should be 3 items long', function() {
    return deleteItem(userId, itemId).should.eventually.have.length.of(3);
  });

  it('should not be undefined', function() {
    return deleteItem(userId, itemId).should.eventually.not.be.undefined;
  });

  it('should contain the email and user password', function() {
    deleteItem(userId, itemId).should.eventually.have.property('email');
    deleteItem(userId, itemId).should.eventually.have.property('password');
  });

  it('should contain the id_, user_id, category_id, description, date_created and completed status', function() {
    deleteItem(userId, itemId).should.eventually.have.property('id');
    deleteItem(userId, itemId).should.eventually.have.property('user_id');
    deleteItem(userId, itemId).should.eventually.have.property('category_id');
    deleteItem(userId, itemId).should.eventually.have.property('description');
    deleteItem(userId, itemId).should.eventually.have.property('date_created');
    deleteItem(userId, itemId).should.eventually.have.property('completed');
  });

});
