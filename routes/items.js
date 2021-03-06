const express = require("express");
const _ = require("lodash");
const allItems = require("../db/allItems");
const createItem = require("../db/createItem");
const updateItem = require("../db/updateItem");
const assignCategoryFromKeyword = require("../helpers/assignCategoryFromKeyword");
const deleteItem = require("../db/deleteItem");
const getItem = require("../db/getItem");
const itemsInCategories = require("../db/itemsInCategories");
const orderCategoriesByPopularity = require("../helpers/orderCategoriesByPopularity");

const router = express.Router();
const {
  dbmOrder,
  dmbOrder,
} = require("../helpers/apiOrdering");

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
    //Check the length of the user's lists to determine which order to query the APIs in. (For example, if a user enters "Lord of the Rings" and has 20 items on the movies list and 0 on the books, the user probably wants the movie.) Dining is the most accurate,
    itemsInCategories(request.params.userid, "count", "DESC").then((result) => {
      const orderedCategories = orderCategoriesByPopularity(result);

      if (+_.isEqual(orderedCategories, ["Books", "Movies"])) {
        dbmOrder(userEntry, userId, response);
      }
      if (+_.isEqual(orderedCategories, ["Movies", "Books"])) {
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
    //Convenience variables for params and user input. If the user doesn't set description or completed, set the variables to null so the updateItem function will run OK
    const userId = request.params.userid;
    const itemId = request.params.itemid;
    const categoryName = request.body.category_name ? request.body.category_name : null;
    const description = request.body.item_description ? request.body.item_description : null;
    const completed = request.body.completed ? request.body.completed : null;
    const dateDue = null;
    const priority = null;

    updateItem(userId, itemId, categoryName, description, completed, dateDue, priority)
      .then((items) => {
        response.json({ items });
        return;
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
