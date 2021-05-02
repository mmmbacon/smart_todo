const chai = require('chai');
const { sortCategories } = require('../../routes/helpers');

describe('helpers', function() {
  it('should return object keys sorted by greatest to least values', () => {
    assertDeepEqual(sortCategories({books: 3, movies: 2, eateries: 1}),['books','movies','eateries'])
  });
});



