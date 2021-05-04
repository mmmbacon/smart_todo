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

    //Book then movie then eatery
    isItABook(userEntry)
      .then(result => {
        //"Result" variable will either be the userEntry's character id # (which means, yes, it's a book) or false. If it's a book, return the code and jump to the next outer then (the one with param categoryCode), where we'll create the new item
        if (result === 2) { //or is true
          console.log(`It is a book`)
          return result; //this will be 2
        }
        //If it wasn't a book, check if it was a movie (code 1). If yes, jump to next then
        isItAMovie(userEntry)
          .then(result => {
            if (result === 1) {
              console.log(`It is a movie`)
              return result;
            }
            //If it wasn't a movie either, check if it was an eatery (code 3). If yes, jump to next then
            isItAnEatery(userEntry)
              .then(result => {
                if (result === 3) {
                  console.log(`It is an eatery`)
                  return result;
                }
                //If none of the apis picked anything up, assume it's a product and return 4 for the product category code
                return 4;
              })
          })
      })

      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
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
    //Book then eatery then movie
    isItABook(userEntry)
      .then(result => {
        if (result === 2) {
          // console.log(`It is a book`)
          return result;
        }
        isItAnEatery(userEntry)
          .then(result => {
            if (result === 3) {
              // console.log(`It is an eatery`)
              return result;
            }
            isItAMovie(userEntry)
              .then(result => {
                if (result === 1) {
                  // console.log(`It is a movie`)
                  return result;
                }
                return 4;
              })
          })
      })

      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
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
