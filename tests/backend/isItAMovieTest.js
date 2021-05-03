const chai = require('chai');
const { isItAMovie } = require('../../routes/helpers');

describe('helpers', function() {
  it('should return true for fellowship of the ring', () => {
    assertEqual(isItAMovie('fellowship of the ring'),true)
  });
  it('should return true for how to tune your dulcimer', () => {
    assertEqual(isItAMovie('how to tune your dulcimer'),true)
  });
  it('should return false for keysmashad;iudaf;iudd', () => {
    assertEqual(isItAMovie('keysmashad;iudaf;iudd'),false)
  });

});



