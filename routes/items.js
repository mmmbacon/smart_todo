const express = require('express');
const allItems = require('../db/allItems.js');
const router = express.Router();
const { sortCategories, isItAMovie, isItABook, isItAnEatery } = require('./helpers.js');


module.exports = (db) => {
  //Get all items routes
  router.get("/:userid/items", (req, res) => {
    allItems(req.params.userid)
      .then(items => {
        res.json({ items });
      })
      .catch(error => {
        console.log(error);
        res
          .status(500)
          .json({ error: error.message })
        //should figure out how to trigger this for testing
      });
  });
  // (still in progress)
  router.post("/:userid/items", (req, res) => {
    const userEntry = 'lordoftherings' //eventually grab from frontend

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
        isItABook(userEntry)
        .then(res => {
          if (res) {
            //add to database as a book
          }
          return;
        })
        continue; //i think i can cut these actually

      }
      if (category === 'movies') {

        isItAMovie(userEntry)
        .then(res => {
          if (res) {
            //add to database as a movie
          }
          return;
        })

        continue;
      }
      if (category === 'eateries') {

        isItAnEatery(userEntry)
        .then(res => {
          if (res) {
            //add to database as an eatery
          }
          return;
        })
        continue;
      }
    }

    //if it was none of those things, add to database as a product


  });
  //Get individual items routes
  router.get("/:userid/items/:itemid", (req, res) => {
    console.log('req.params.userid', req.params.userid, 'req.params.itemid', req.params.itemid)
  });

  //Edit individual item
  router.put("/:userid/items/:itemid", (req, res) => {

  });

  //Delete individual item
  router.delete("/:userid/items/:itemid", (req, res) => {
    deleteItem(req.params.userid, req.params.itemid)
      .then(items => {
        res.json({ items }); //so Brianna can see what she's got
      })
      .catch(error => {
        console.log(error);
        res
          .status(500)
          .json({ error: error.message })
      });
  });

  return router;
}
