const chai = require("chai");
const expect = require("chai").expect;
chai.should();

const apiValidate = require('../../routes/helpers/apiValidate');

describe('API Validation', function() {

  it('should return an integer', function() {
    apiValidate('Lord of The Rings', 'Lord of The Rings').should.be.an('number');
  });

  it('should not be undefined', function() {
    apiValidate('Lord of The Rings', 'Lord of The Rings').should.not.be.undefined;
  });

  it('Result should equal 4', function() {
    apiValidate('Lord of The Rings', 'Lord of The Rings').should.equal(4);
  });

  it('Result should not be above or below 4', function() {
    apiValidate('Lord of The Rings', 'Lord of The Rings').should.not.be.below(4);
    apiValidate('Lord of The Rings', 'Lord of The Rings').should.not.be.above(4);
  });

  it('should return undefined if one or none arguments are provided', function() {
    expect(apiValidate()).to.be.undefined;
  });
});
