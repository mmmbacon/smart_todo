const express = require('express');
const allItems = require('../db/allItems');
const createItem = require('../db/createItem');
const deleteItem = require('../db/deleteItem');
const getItem = require('../db/getItem');
const getUser = require('../db/getUser');
const itemsInCategories = require('../db/itemsInCategories');


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
    //convenience variables for the to-do the user submitted
    const userEntry = req.body['new-item-text'];
    const priority = 1; //will actually be req.body.something, to check with Lily, stretch

    //check for keywords (db? just an array?)

    //if no match, count amount of rows in books, movies, restaurants database (placeholder data currently; will use SQL later)

    const apiPriority = {
      books: 3,
      movies: 2,
      eateries: 1
    }

    //get the category with the highest count
    const sortedCategories = sortCategories(apiPriority);

    // query the apis in order--to write

    //far-reaching? make the first two thens in the book funciton 55-67
    // const book = await (serious of thens)
    //if reusing, make it's own function

//book, movie, eatery
    isItABook(userEntry)
      .then(bookResult => {
        if (bookResult) {
          console.log(`It is a book`)
          //can we use the category names? better readibility
          return 2;
        }
        return 4;
      })
      .then(result => {
        if (result === 2) {
          return 2;
        }//end
        isItAMovie(userEntry)
          .then(movieResult => {
            if (movieResult) {
              console.log(`It is a movie`)
              return 1;
            }
            return 4;
          })
      })
      .then(result => {
        if (result !== 4) {
          return result;
        }//end
        isItAnEatery(userEntry)
          .then(eateryResult => {
            if (eateryResult) {
              console.log(`It is an eatery`)
              return 3;
            }
            return 4;
          })
      })
      .then(result => {
        createItem(req.params.userid, result, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });
  })

  //Get individual items routes
  router.get("/:userid/items/:itemid", (req, res) => {
    getItem(req.params.userid, req.params.itemid)
      .then(item => {
        res.json({ item });
      })
      .catch(error => {
        console.log(error);
        res
          .status(500)
          .json({ error: error.message })
      });
  });

  //Edit individual item
  router.put("/:userid/items/:itemid", (req, res) => {

  });

  //Delete individual item
  router.delete("/:userid/items/:itemid", (req, res) => {
    deleteItem(req.params.userid, req.params.itemid)
      .then(items => {
        res.json({ items });
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
