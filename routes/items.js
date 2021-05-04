const express = require("express");
const allItems = require("../db/allItems");
const createItem = require("../db/createItem");
const assignCategoryFromKeyword = require("../routes/assignCategoryFromKeyword");
const deleteItem = require("../db/deleteItem");
const getItem = require("../db/getItem");
const getUser = require("../db/getUser");
const itemsInCategories = require("../db/itemsInCategories");

const router = express.Router();
const {
  bdmOrder,
  bmdOrder,
  mbdOrder,
  mdbOrder,
  dbmOrder,
  dmbOrder,
} = require("./pathsHelpers");

module.exports = (db) => {
  //Get all items routes
  router.get("/:userid/items", (req, res) => {
    allItems(req.params.userid)
      .then((items) => {
        res.json({ items });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message });
        //should figure out how to trigger this for testing
      });
    //getting an error, to talk to Brandon
  });
  // (still in progress)
  router.post("/:userid/items", (req, response) => {
    //convenience variables for the to-do the user submitted
    const userEntry = req.body["new-item-text"];
    const userId = req.params.userid;

    //check for keywords (db? just an array?)

    //BM - Grab items in order of importance
    itemsInCategories(req.params.userid, "count", "DESC").then((result) => {
      // console.log('result',result)
      const apiPriority = [
        { id: 3, name: "Dining", item_count: 2 },
        { id: 1, name: "Movies", item_count: 3 },
        { id: 2, name: "Books", item_count: 4 },
        { id: 4, name: "Products", item_count: 1 },
      ];
      //Check if the user entry contains any giveaway keywords ("read","movie", etc.)
      const categoryFromKeyword = assignCategoryFromKeyword(userEntry);
      console.log("categoryFromKeyword", categoryFromKeyword);
      if (categoryFromKeyword) {
        console.log("in categoryfromkeyword block");
        createItem(userId, categoryFromKeyword, userEntry, 1) //1= priority--get from user input if we do this stretch
          .then((items) => {
            response.json({ items });
          })
          .catch((error) => {
            console.log(error);
            response.status(500).json({ error: error.message });
          });
        return;
      }

      if (
        apiPriority[0].name === "Books" &&
        apiPriority[1].name === "Dining" &&
        apiPriority[2].name === "Movies"
      ) {
        bdmOrder(userEntry, userId, response);
      }
      if (
        apiPriority[0].name === "Books" &&
        apiPriority[1].name === "Movie" &&
        apiPriority[2].name === "Dining"
      ) {
        bmdOrder(userEntry, userId, response);
      }
      if (
        apiPriority[0].name === "Movies" &&
        apiPriority[1].name === "Books" &&
        apiPriority[2].name === "Dining"
      ) {
        mbdOrder(userEntry, userId, response);
      }
      if (
        apiPriority[0].name === "Movies" &&
        apiPriority[1].name === "Dining" &&
        apiPriority[2].name === "Books"
      ) {
        mdbOrder(userEntry, userId, response);
      }
      if (
        apiPriority[0].name === "Dining" &&
        apiPriority[1].name === "Books" &&
        apiPriority[2].name === "Movies"
      ) {
        dbmOrder(userEntry, userId, response);
      }
      if (
        apiPriority[0].name === "Dining" &&
        apiPriority[1].name === "Movies" &&
        apiPriority[2].name === "Books"
      ) {
        dmbOrder(userEntry, userId, response);
      }
    });
  });

  //Get individual items routes
  router.get("/:userid/items/:itemid", (req, res) => {
    getItem(req.params.userid, req.params.itemid)
      .then((item) => {
        res.json({ item });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  });

  //Edit individual item
  router.put("/:userid/items/:itemid", (req, res) => {});

  //Delete individual item
  router.delete("/:userid/items/:itemid", (req, res) => {
    deleteItem(req.params.userid, req.params.itemid)
      .then((items) => {
        res.json({ items });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  });

  return router;
};
