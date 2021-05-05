const express = require("express");
const allItems = require("../db/allItems");
const createItem = require("../db/createItem");
const updateItem = require("../db/updateItem");
const assignCategoryFromKeyword = require("../routes/assignCategoryFromKeyword");
const deleteItem = require("../db/deleteItem");
const getItem = require("../db/getItem");
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
  //////Get all items route
  router.get("/:userid/items", (request, response) => {
    allItems(request.params.userid)
      .then((items) => {
        response.json({ items });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).json({ error: error.message });
        //should figure out how to trigger this for testing
      });
  });

  //////Post all items route
  router.post("/:userid/items", (request, response) => {
    //Convenience variables for the to-do the user submitted
    const userEntry = request.body["new-item-text"];
    const userId = request.params.userid;

    //Check if the user entry contains any giveaway keywords ("read","movie", etc.) and assign to the appropriate category
    const categoryFromKeyword = assignCategoryFromKeyword(userEntry);
    if (categoryFromKeyword) {
      createItem(userId, categoryFromKeyword, userEntry, null)
        .then((items) => {
          response.json({ items });
        })
        .catch((error) => {
          console.log(error);
          response.status(500).json({ error: error.message });
        });
      return;
    }
    //Check the length of the user's list and query the corresponding APIs in order of longest to shortest list to get most relevant resonse. (For example, if a user enters "Lord of the Rings" and has 20 items on the movies list and 0 on the books, the user probably wants the movie.)
    itemsInCategories(request.params.userid, "count", "DESC").then((result) => {
      // console.log("result", result); FIXFIX
      const apiPriority = [
        { id: 3, name: "Dining", item_count: 2 },
        { id: 1, name: "Movies", item_count: 3 },
        { id: 2, name: "Books", item_count: 4 },
        { id: 4, name: "Products", item_count: 1 },
      ];

      //create function to make apipriotiry into simple array
      //lodash to compare array

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

  /////Get individual item route
  router.get("/:userid/items/:itemid", (request, response) => {
    getItem(request.params.userid, request.params.itemid)
      .then((item) => {
        response.json({ item });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).json({ error: error.message });
      });
  });

  //Edit individual item route
  router.put("/:userid/items/:itemid", (request, response) => {
    updateItem(
      request.params.userid,
      request.params.itemid,
      request.body.category_name,
      null,
      request.body.completed,
      null,
      null
    )
      .then((items) => {
        response.json({ items });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).json({ error: error.message });
      });
  });

  /////Delete individual item route
  router.delete("/:userid/items/:itemid", (request, response) => {
    deleteItem(request.params.userid, request.params.itemid)
      .then((items) => {
        response.json({ items });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};
