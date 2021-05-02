const { expect } = require('chai');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

const allItems = require('../../db/allItems');

describe('database', function() {
  it('should return an array of objects', function() {
    const userId = 1;
    return allItems(userId).should.eventually.be.an('array');
  });
});
