const request = require("request"); //for movies api

const sortCategories = function (object) {
  //create an array of the keys
  const categories = Object.keys(object)

  //sort the key array from largest to smallest. If two are the same, it leaves them in the order they appear in the array, which is fine because we no have no preference when we're using this to decide which api to consult first
  const sortedCategories = categories.sort((a, b) => object[b] - object[a]);

  return sortedCategories;
}
//Movie logic
const isItAMovie = function (userEntry) {
  const options = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${userEntry}`,
    headers: {
      'x-rapidapi-key': process.env.MOVIE_KEY,
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      useQueryString: true
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const parsedBody = JSON.parse(body);
    console.log(parsedBody.title)
  });
}

//need to switch to request with promises

// console.log('isitamovie call',isItAMovie('lordoftherings'))


const isItABook = function (userEntry) {


};
const isItAnEatery = function (userEntry) {


};


module.exports = { sortCategories, isItAMovie, isItABook, isItAnEatery }
