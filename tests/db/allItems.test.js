const { expect } = require('chai');
const should = require('chai').should();
const allItems = require('../../db/allItems');

describe('database', function() {
  it('should return an array of objects', function(done) {
    const userId = 1;
    return allItems(userId).should.eventually.be.an('array');
  });
});
