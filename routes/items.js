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
    //getting an error, to talk to Brandon


  });
  // (still in progress)
  router.post("/:userid/items", (req, res) => {
    //convenience variables for the to-do the user submitted
    const userEntry = req.body['new-item-text'];
    const priority = 1; //will actually be req.body.something, to check with Lily, stretch

    //check for keywords (db? just an array?)

    //if no match, count amount of rows in books, movies, restaurants database (placeholder data currently; will use SQL later)

    // ultimately get this object from Brandon's function. Item counts are strings there (I don't think I care since he's already sorted them?) but function throws errors
    //BM - Grab items in order of importance
    itemsInCategories(req.params.userid, 'item_count', 'DESC')
      .then(res => {
        //First item category
        for(const item of res){
          if(item.name === 'Book'){
            IsItABook //promise
          }

          if(item.name === 'Book'){
            IsItABook
          }

          if(item.name === 'Book'){
            IsItABook
          }

          if(item.name === 'Book'){
            IsItABook
          }


        }


      })
    // const apiPriority = [
    //   { id: 3, name: 'Books', item_count: 4 },
    //   { id: 2, name: 'Dining', item_count: 3 },
    //   { id: 1, name: 'Movies', item_count: 2 },
    //   { id: 4, name: 'Products', item_count: 1 }]


    const iIAB = function(){

    }



    //Book then eatery then movie
    if (apiPriority[0].name === 'Books' && apiPriority[1].name === 'Dining' && apiPriority[2].name === 'Movies') {
      console.log('we are in Book then eatery then movie')
      isItABook(userEntry)
        .then(result => {
          if (result === 2) {
            // console.log(`It is a book`)
            return result;
          }
          return isItAnEatery(userEntry)
            .then(result => {
              if (result === 3) {
                // console.log(`It is an eatery`)
                return result;
              }
              return isItAMovie(userEntry)
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

    }



    ///////////////////////////Movie first paths
    //Movie, book, eatery
    if (apiPriority[0].name === 'Movies' && apiPriority[1].name === 'Books' && apiPriority[2].name === 'Dining') {
      console.log('we are in Movie, book, eatery')
      isItAMovie(userEntry)
      .then(result => {
          if (result === 1) {
            return result;
          }
          return isItABook(userEntry)
          .then(result => {
              console.log("result of book check:",result)
              if (result === 2) {
                console.log('in book check result:',result)
                return result;
              }
              return isItAnEatery(userEntry)
                .then(result => {
                  console.log("result of eatery check:", result)
                  if (result === 3) {
                    return result;
                  }
                  return 4;
                })
            })
        })
        .then(categoryCode => {
          console.log('categorycode',categoryCode);
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

    }

    //Movie, eatery, book
    if (apiPriority[0].name === 'Movies' && apiPriority[1].name === 'Dining' && apiPriority[2].name === 'Books') {
      console.log('we are in Movie, eatery, book')
      isItAMovie(userEntry)
        .then(result => {
          if (result === 1) {
            // console.log(`It is a movie`)
            return result;
          }
          return isItAnEatery(userEntry)
            .then(result => {
              if (result === 3) {
                // console.log(`It is an eatery`)
                return result;
              }
              return isItABook(userEntry)
                .then(result => {
                  if (result === 2) {
                    // console.log(`It is a book`)
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

    }



    ///////////////////////////Eatery first paths
    //Eatery, book, movie
    if (apiPriority[0].name === 'Dining' && apiPriority[1].name === 'Books' && apiPriority[2].name === 'Movies') {
      console.log('we are in Eatery, book, movie')
      isItAnEatery(userEntry)
        .then(result => {
          if (result === 3) {
            // console.log(`It is an eatery`)
            return result;
          }
          return isItABook(userEntry)
            .then(result => {
              if (result === 2) {
                // console.log(`It is a book`)
                return result;
              }
              return isItAMovie(userEntry)
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
    }
    //Eatery, movie, book
    if (apiPriority[0].name === 'Dining' && apiPriority[1].name === 'Movies' && apiPriority[2].name === 'Books') {
      console.log('we are in Eatery, movie, book')
      isItAnEatery(userEntry)
        .then(result => {
          if (result === 3) {
            // console.log(`It is an eatery`)
            return result;
          }
          return isItAMovie(userEntry)
            .then(result => {
              if (result === 1) {
                // console.log(`It is a movie`)
                return result;
              }
              return isItABook(userEntry)
                .then(result => {
                  if (result === 2) {
                    // console.log(`It is a book`)
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

    }
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
