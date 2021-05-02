const { expect } = require('chai');
const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.should();

const allItems = require('../../db/allItems');

describe('database', function() {
  it('should return an array of objects', function() {
    const userId = 1;
    return allItems(userId).should.eventually.be.an('array');
  });

  it('should not be undefined', function() {
    const userId = 1;
    return allItems(userId).should.eventually.not.be.undefined;
  });

  it('should contain the email and user password', function(done) {
    const userId = 1;
    allItems(userId).should.eventually.have.property('email');
    allItems(userId).should.eventually.have.property('password');
    return done();
  });

  it('should contain the id_, user_id, category_id, description, date_created and completed status', function(done) {
    const userId = 1;
    allItems(userId).should.eventually.have.property('id');
    allItems(userId).should.eventually.have.property('user_id');
    allItems(userId).should.eventually.have.property('category_id');
    allItems(userId).should.eventually.have.property('description');
    allItems(userId).should.eventually.have.property('date_created');
    allItems(userId).should.eventually.have.property('completed');
    return done();
  });

});
