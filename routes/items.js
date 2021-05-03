const express = require('express');
const allItems = require('../db/allItems');
const createItem = require('../db/createItem');
const deleteItem = require('../db/deleteItem');
const getItem = require('../db/getItem');
const getUser = require('../db/getUser');
const itemsInCategories = require('../db/itemsInCategories');


const router = express.Router();
const { sortCategories, isItAMovie, isItABook, isItAnEatery } = require('./helpers.js');

const priority = 1; //will actually be req.body.something, to check with Lily, stretch

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
    //convenience variable for the to-do the user submitted
    const userEntry = req.body.text; //body is an empty object--front-end issue?
    console.log('userentry',userEntry);

    //check for keywords (db? just an array?)

    //if no match, count amount of rows in books, movies, restaurants database (placeholder data currently; will use SQL later)

    const apiPriority = {
      books: 3,
      movies: 2,
      eateries: 1
    }

    //get the category with the highest count
    const sortedCategories = sortCategories(apiPriority);

    // query the apis in order

    for (const category of sortedCategories) {
      if (category === 'books') {
        isItABook(userEntry)
          .then(res => {
            if (res) {
              console.log('It is a book, adding to database...')
              createItem(req.params.userid, 2, userEntry, priority)
                // itemS because db returns the full item list
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
            }
          })

      }
      if (category === 'movies') {

        isItAMovie(userEntry)
          .then(res => {
            if (res) {
              console.log('It is a movie, adding to database...')
              createItem(req.params.userid, 1, userEntry, priority)
              // .then(items => {
              //   res.json({ items })
              // })
              // .catch(error => {
              //   console.log(error);
              //   res
              //     .status(500)
              //     .json({ error: error.message })
              // });
              return;
            }
          })
      }
      if (category === 'eateries') {

        isItAnEatery(userEntry)
          .then(res => {
            if (res) {
              console.log('It is an eatery, adding to database...')
              createItem(req.params.userid, 3, userEntry, priority)
              // .then(items => {
              //   res.json({ items })
              // })
              // .catch(error => {
              //   console.log(error);
              //   res
              //     .status(500)
              //     .json({ error: error.message })
              // });
              return;
            }
          })
      }
    }

    //if it was none of those things, add to database as a product--this needs to be asynchronous!!
    console.log('It is a product, adding to database...')
    createItem(req.params.userid, 4, userEntry, priority)
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
