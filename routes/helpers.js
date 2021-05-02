
const sortCategories = function (object) {
  //create an array of the keys
  const categories = Object.keys(object)

  //sort the key array from largest to smallest. If two are the same, it leaves them in the order they appear in the array, which is fine because we no have no preference when we're using this to decide which api to consult first
  const sortedCategories = categories.sort((a, b) => object[b] - object[a]);

  return sortedCategories;
}

// console.log(sortCategories({books: 5, movies: 11, eateries: 3}));

// const test = function (array) {
//   for (const i of array) {
//       if (i === 'books') {
//         console.log('imma book')
//         continue;
//       }
//       if (i === 'movies') {
//         console.log('imma movie')
//         continue;
//       }
//       if (i === 'eateries') {
//         console.log('imma eatery')
//         continue;
//     }

//   }
//   return 'imma product'
// }
const sortedCategories = ['movies','eateries','books']
console.log(test(sortedCategories))


module.exports = { sortCategories }
