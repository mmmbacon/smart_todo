
const sortCategories = function (object) {
  //create an array of the keys
  const categories = Object.keys(object)

  //sort the key array from largest to smallest. If two are the same, it leaves them in the order they appear in the array, which is fine because we no have no preference when we're using this to decide which api to consult first
  const sortedCategories = categories.sort((a,b) => object[b]-object[a]);

  return sortedCategories
}

// console.log(sortCategories({books: 5, movies: 11, eateries: 3}));

module.exports = {sortCategories}
