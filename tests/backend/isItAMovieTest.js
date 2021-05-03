const chai = require('chai');
const { isItAMovie } = require('../../routes/helpers');

describe('helpers', function() {
  //happy path
  it('should return true for fellowship of the ring', () => {
    chai.assertEqual(isItAMovie('fellowship of the ring'),true)
  });

  it('should return true for avatar', () => {
    chai.assertEqual(isItAMovie('amelie'),true)
  });

  //sad (?) path
  it('should return false for keysmashad;iudaf;iudd', () => {
    chai.assertEqual(isItAMovie('keysmashad;iudaf;iudd'),false)
  });

  it('should return false for murchie\'s (eatery)', () => {
    chai.assertEqual(isItAMovie('murchie\'s'),false)
  });

  it('should return false for do not say we have nothing (book)' , () => {
    chai.assertEqual(isItAMovie('do not say we have nothing'),false)
  });

});



