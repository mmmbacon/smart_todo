const require = require("request"); //for movies api

const sortCategories = function (object) {
  //create an array of the keys
  const categories = Object.keys(object)

  //sort the key array from largest to smallest. If two are the same, it leaves them in the order they appear in the array, which is fine because we no have no preference when we're using this to decide which api to consult first
  const sortedCategories = categories.sort((a, b) => object[b] - object[a]);

  return sortedCategories;
}


const isItAMovie = function (userEntry) {
  //???? Lily to make entry safe, or me?
  const options = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${userEntry}`,
    headers: {
      'x-rapidapi-key': MOVIE_KEY,
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      useQueryString: true
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    return body
  });
}

console.log(isItAMovie(lordoftherings));

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
// const sortedCategories = ['movies','eateries','books']


module.exports = { sortCategories }
