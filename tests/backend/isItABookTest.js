const chai = require('chai');
const { isItABook } = require('../../routes/helpers');

describe('helpers', function() {
  //happy path
  it('should return true for fellowship of the ring', () => {
    chai.assertEqual(isItABook('fellowship of the ring'),true)
  });

  it('should return true for how to tune your dulcimer', () => {
    chai.assertEqual(isItABook('how to tune your dulcimer'),true)
  });

  //sad (?) path
  it('should return false for keysmashad;iudaf;iudd', () => {
    chai.assertEqual(isItABook('keysmashad;iudaf;iudd'),false)
  });

  it('should return false for burn after reading (movie)', () => {
    chai.assertEqual(isItABook('burn after reading'),false)
  });

  it('should return false for murchie\'s (eatery)', () => {
    chai.assertEqual(isItABook('murchie\'s'),false)
  });

});



