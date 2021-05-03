const request = require("request"); //for movies api
const yelp = require('yelp-fusion'); //eateries api

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

//test code
// isItAMovie('lordof the rings')
//   .then(res => {
//     // console.log('res:',res)
//     if (res) {
//       console.log('yes, it is a movie, add to database as a movie')
//     }
//     return;
//   })

//Book logic
const isItABook = function (userEntry) {
  return new Promise((res, rej) => {
    request(`https://www.googleapis.com/books/v1/volumes?q=${userEntry}&key=${process.env.BOOK_KEY}`, function (error, response, body) {
      if (error) rej(error);
      const bookTitle = JSON.parse(body).items[0].volumeInfo.title;
      console.log('title:', bookTitle)

      if (bookTitle.length > 0) {
        res(true);
      } else {
        res(false);
      }
    });
  });
};

//testcode
// isItABook('bedlamstacks')
//   .then(res => {
//     // console.log('res:',res)
//     if (res) {
//       console.log('yes, it is a book, add to database as a book')
//     }
//     return;
//   })

//Eatery logic
const getLocation = function () {
  return new Promise((res, rej) => {
    request('https://extreme-ip-lookup.com/json/', function (error, response, body) {
      if (error) rej(error);
      const location = [];
      location.push(JSON.parse(body).city, JSON.parse(body).region);
      console.log('location', location);
      res(location);
    });
  });

}


const isItAnEatery = function (userEntry) {

  //how to call this correctly?
  const location = getLocation()
    .then(res => {
      console.log('location array is', res)
      return res;
    })
    .then(res => {
      //from yelp api documentation starts here
      const apiKey = process.env.EATERY_KEY;

      const searchRequest = {
        term: userEntry,
        location: `${res[0]}, ${res[1]}`
      };

      const client = yelp.client(apiKey);

      client.search(searchRequest)
        .then(response => {
          const firstResult = response.jsonBody.businesses[0];
          const name = firstResult.name;
          // console.log('firstresult',firstResult) //to see the restaurant's real location
          if (name.length > 0) {
            console.log('name', name);
            return name;
          }
          return;
        }).catch(error => {
          console.log(error);
        });


    })

    .catch((data, status) => {
      console.log('Request failed');
    })



};

//test code
// isItAnEatery('lordoftherings')
// .then(res => {
//   console.log('res:', res)
//   if (res) {
//     console.log('yes, it is an eatery, add to database as an eatery')
//   }
//   return;
// })


module.exports = { sortCategories, isItAMovie, isItABook, isItAnEatery }
