const express = require('express');
const allItems = require('../db/allItems.js');
const router = express.Router();
const { sortCategories, isItAMovie, isItABook, isItAnEatery } = require('./helpers.js');

const userEntry = 'lordoftherings' //eventually grab from frontend

module.exports = {
  getItems: (db) => {
    //route is just "/" because full route is already in server.js
    router.get("/", (req, res) => {
      allItems(1)
        .then(items => {
          // console.log(items);
          res.json({ items }); //so Brianna can see what she's got
          return items;
        })
        .catch(error => {
          console.log(error);
          res
          .status(500)
          .json({ error: error.message })
          //should figure out how to trigger this for testing
        });
    });
    return router;
  },
  //Create a new item
  postItems: (db) => {
    router.get("/", (req, res) => {

      //check for keywords (db? just an array?)

      //if no match, count amount of rows in books, movies, restaurants database (Brandon to supply query to replace null)

      const apiPriority = {
        books: null,
        movies: null,
        products: null
      }

      //get the category with the highest count
      const sortedCategories = sortCategories(apiPriority);

      // query the apis in order

      for (const category of sortedCategories) {
        if (category === 'books') {
          if (isItABook(userEntry)) {
            return 'it was in the api, its a book' //add to database
          }
          continue; //i think i can cut these actually

        }
        if (category === 'movies') {

          if (isItAMovie(userEntry)) {
            return 'it was in the api, its a movie' //add to database
          }

          continue;
        }
        if (category === 'eateries') {
          //call function that returns movie api data
          if (isItAnEatery(userEntry)) {
            return 'it was in the api, its an eatery' //add to database
          }
          continue;
        }
      }

      //if it was none of those things, add to database as a product


    });
    return router;
  }
};
