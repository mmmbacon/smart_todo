const request = require("request"); //for use isItAMovie and isItABook
const yelp = require("yelp-fusion"); //for use in isItDining
const apiValidate = require("../helpers/apiValidate");

//Check the user to-do against the IMBD database to determine if it's a movie
const isItAMovie = function (userEntry) {
  const options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${userEntry}`,
    headers: {
      "x-rapidapi-key": process.env.MOVIE_KEY,
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      useQueryString: true,
    },
  };

  return new Promise((res, rej) => {
    request(options, function (error, response, body) {
      if (error) rej(error);
      if (JSON.parse(body).title) {
        const movieTitle = JSON.parse(body).title;
        const matchScore = apiValidate(userEntry, movieTitle);
        if (matchScore > 0.5) {
          //keyword match between userinput and api return--api return contains ANY keywords. Something more complicated won't even work--we don't have enough control
          console.log("IMBD found the title:", movieTitle);
          res("Movies");
        }
        res(false);
      }
      res(false);
    });
  });
};

// //test code
// isItAMovie("jaws").then((res) => {
//   // console.log('res:',res)
//   if (res) {
//     console.log("yes, it is a movie, add to database as a movie");
//   }
//   return;
// });

//Check the user to-do against the Google Books database to determine if it's a book
const isItABook = function (userEntry) {
  return new Promise((res, rej) => {
    request(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userEntry}&key=${process.env.BOOK_KEY}`,
      function (error, response, body) {
        if (error) rej(error);

        let bookTitle = "";
        if (JSON.parse(body).items) {
          bookTitle = JSON.parse(body).items[0].volumeInfo.title;
          const matchScore = apiValidate(userEntry, bookTitle);
          if (matchScore > 0.5) {
            console.log("Google found the book title:", bookTitle);
            res("Books");
          }
          res(false);
        }
        res(false);
      }
    );
  });
};

//testcode
// isItABook("zzzzzzzzzzzzzzzzz").then((res) => {
//   // console.log('res:',res)
//   if (res) {
//     console.log("yes, it is a book, add to database as a book");
//   }
//   return;
// });

//Get the user's location based on their IP address (used as a helper in isItDining)
const getLocation = function () {
  return new Promise((res, rej) => {
    request(
      "https://extreme-ip-lookup.com/json/",
      function (error, response, body) {
        if (error) rej(error);
        const location = [];
        location.push(JSON.parse(body).city, JSON.parse(body).region);
        // console.log('location', location);
        res(location);
      }
    );
  });
};

//Check the user to-do against the yelp database to determine if it's a restaurant
const isItDining = function (userEntry) {
  return getLocation()
    .then((res) => {
      return res;
    })
    .then((res) => {
      const apiKey = process.env.EATERY_KEY;

      const searchRequest = {
        term: userEntry,
        location: `${res[0]}, ${res[1]}`,
        limit: 1,
      };

      const client = yelp.client(apiKey);

      return client
        .search(searchRequest)
        .then((response) => {
          let diningName = "";
          if (response.jsonBody.businesses[0]) {
            diningName = response.jsonBody.businesses[0].name;
            const matchScore = apiValidate(userEntry, bookTitle);
            if (matchScore > 0.5) {
              console.log("Yelp found the restaurant name:", diningName);
              return "Dining";
            }
          }
          return false;
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
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

module.exports = { isItAMovie, isItABook, isItDining };
