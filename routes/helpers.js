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
      //key will be undefined if you node helpers.js, have to do it with the server running
      'x-rapidapi-key': process.env.MOVIE_KEY,
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      useQueryString: true
    }
  };

  return new Promise((res, rej) => {
    request(options, function (error, response, body) {
      if (error) rej(error);
      const movieTitle = JSON.parse(body).title;
      // console.log('title:', movieTitle)

      if (movieTitle.length > 0) {
        res(true);
      } else {
        res(false);
      }
    });
  });
}


isItAMovie('lordof the rings')
  .then(res => {
    // console.log('res:',res)
    if (res) {
      console.log('yes, it is a movie, add to database as a movie')
    }
    return;
  })


const isItABook = function (userEntry) {


};
const isItAnEatery = function (userEntry) {


};


module.exports = { sortCategories, isItAMovie, isItABook, isItAnEatery }
