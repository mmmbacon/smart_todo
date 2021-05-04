const express = require('express');
const allItems = require('../db/allItems');
const createItem = require('../db/createItem');
const deleteItem = require('../db/deleteItem');
const getItem = require('../db/getItem');
const getUser = require('../db/getUser');
const itemsInCategories = require('../db/itemsInCategories');


const router = express.Router();
const { bdmOrder, bmdOrder, mbdOrder, mdbOrder, dbmOrder, dmbOrder } = require('./pathsHelpers');



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

    //BM - Grab items in order of importance
    itemsInCategories(req.params.userid, 'count', 'DESC')
      .then(apiPriority => {
        console.log('apiPriority',apiPriority)
        if (apiPriority[0].name === 'Books' && apiPriority[1].name === 'Dining' && apiPriority[2].name === 'Movies') {
          bdmOrder(userEntry);
        }
        if (apiPriority[0].name === 'Books' && apiPriority[1].name === 'Movie' && apiPriority[2].name === 'Dining') {
          bmdOrder(userEntry);
        }
        if (apiPriority[0].name === 'Movies' && apiPriority[1].name === 'Books' && apiPriority[2].name === 'Dining') {
          mbdOrder(userEntry);
        }
        if (apiPriority[0].name === 'Movies' && apiPriority[1].name === 'Dining' && apiPriority[2].name === 'Books') {
          mdbOrder(userEntry);
        }
        if (apiPriority[0].name === 'Dining' && apiPriority[1].name === 'Books' && apiPriority[2].name === 'Movies') {
          dbmOrder(userEntry);
        }
        if (apiPriority[0].name === 'Dining' && apiPriority[1].name === 'Movies' && apiPriority[2].name === 'Books') {
          dmbOrder(userEntry);
        }

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
