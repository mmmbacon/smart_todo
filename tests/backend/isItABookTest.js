const chai = require('chai');
const { isItABook } = require('../../routes/helpers');

describe('helpers', function() {
  it('should return true for fellowship of the ring', () => {
    assertEqual(isItABook('fellowship of the ring'),true)
  });
  it('should return true for how to tune your dulcimer', () => {
    assertEqual(isItABook('how to tune your dulcimer'),true)
  });
  it('should return false for keysmashad;iudaf;iudd', () => {
    assertEqual(isItABook('keysmashad;iudaf;iudd'),false)
  });

});



