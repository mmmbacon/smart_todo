const request = require("request"); //for use in movies and books functions
const yelp = require('yelp-fusion'); //for use in eateries api

const sortCategories = function (object) {
  //create an array of the keys
  const categories = Object.keys(object)

  //sort the key array from largest to smallest. If two are the same, it leaves them in the order they appear in the array, which is fine? because we no have no preference when we're using this to decide which api to consult first
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

  return new Promise((res, rej) => {
    request(options, function (error, response, body) {
      if (error) rej(error);
      if (JSON.parse(body).title) {
        const movieTitle = JSON.parse(body).title;
        console.log('IMBD found the title:', movieTitle)
        res(1); //this is the database category for movies, change to words for clarity/readability?
      }
      res(false);
    });
  });
}

//test code
// isItAMovie('do not say we have nothing')
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

      let bookTitle = '';
      if (JSON.parse(body).items) {
        bookTitle = JSON.parse(body).items[0].volumeInfo.title;
        console.log('Google found the book title:', bookTitle)
        res(2); //database category code
      }
      res(false);
    });
  });
};

//testcode
// isItABook('do not say we have nothing')
//   .then(res => {
//     // console.log('res:',res)
//     if (res) {
//       console.log('yes, it is a book, add to database as a book')
//     }
//     return;
//   })

//dining logic
const getLocation = function () {
  return new Promise((res, rej) => {
    request('https://extreme-ip-lookup.com/json/', function (error, response, body) {
      if (error) rej(error);
      const location = [];
      location.push(JSON.parse(body).city, JSON.parse(body).region);
      // console.log('location', location);
      res(location);
    });
  });

}

const isItDining = function (userEntry) {

  //how to call this correctly?
  return getLocation()
    .then(res => {
      // console.log('location array is', res)
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

      return client.search(searchRequest)
        .then(response => {
          let diningName = '';
          if (response.jsonBody.businesses[0]) {
            diningName = response.jsonBody.businesses[0].name
            console.log('Yelp found the restaurant name:', diningName);
            return 3; //database category code
          }
          return false;
        }).catch(error => {
          console.log(error);
        });
    })
    .catch((data, status) => {
      console.log('Request failed');
    })
  //yelp docs code ends


};

//test code
// isItAndining('do not say we have nothing')
// .then(res => {
//   console.log('res:', res)
//   if (res) {
//     console.log('yes, it is an dining, add to database as an dining')
//   }
//   return;
// })


module.exports = { sortCategories, isItAMovie, isItABook, isItDining }
