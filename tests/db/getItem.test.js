const { expect } = require('chai');
const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.should();

const getItem = require('../../db/getItem');

describe('database', function() {

  const userId = 1;
  const itemId = 1;

  it('should not return an array', function() {
    return getItem(userId, itemId).should.eventually.not.be.an('array');
  });

  it('should be an object', function() {
    return getItem(userId, itemId).should.eventually.be.an('object');
  });

  it('should not be undefined', function() {
    return getItem(userId, itemId).should.eventually.not.be.undefined;
  });

  it('should contain the id, user_id, category_id, description, date_created, date_due, priority, and completed status', function() {
    return (
      getItem(userId, itemId).should.eventually.have.property('id') &&
      getItem(userId, itemId).should.eventually.have.property('user_id') &&
      getItem(userId, itemId).should.eventually.have.property('category_id') &&
      getItem(userId, itemId).should.eventually.have.property('description') &&
      getItem(userId, itemId).should.eventually.have.property('date_created') &&
      getItem(userId, itemId).should.eventually.have.property('date_due') &&
      getItem(userId, itemId).should.eventually.have.property('priority') &&
      getItem(userId, itemId).should.eventually.have.property('completed')
    );
  });

});
