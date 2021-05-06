const { isItAMovie, isItABook, isItDining } = require("./apiQueries.js");
const createItem = require("../db/createItem");
const priority = null; //stretch FIXFIX

//Call apis in this order: dining then book then movie
const dbmOrder = function (userEntry, userId, response) {
  console.log("order: dining then book then movie");
  isItDining(userEntry)
    .then((result) => {
      if (result === "Dining") {
        return result;
      }
      return isItABook(userEntry).then((result) => {
        if (result === "Books") {
          return result;
        }
        return isItAMovie(userEntry).then((result) => {
          if (result === "Movies") {
            return result;
          }
          return "Products";
        });
      });
    })
    .then((categoryCode) => {
      createItem(userId, categoryCode, userEntry, priority)
        .then((items) => {
          response.json({ items });
        })
        .catch((error) => {
          console.log(error);
          response.status(500).json({ error: error.message });
        });
      return;
    });
};

//Call apis in this order: dining then movie then book
const dmbOrder = function (userEntry, userId, response) {
  console.log("order: dining then movie then book");
  isItDining(userEntry)
    .then((result) => {
      if (result === "Dining") {
        return result;
      }
      return isItAMovie(userEntry).then((result) => {
        if (result === "Movies") {
          return result;
        }
        return isItABook(userEntry).then((result) => {
          if (result === "Books") {
            return result;
          }
          return "Products";
        });
      });
    })
    .then((categoryCode) => {
      createItem(userId, categoryCode, userEntry, priority)
        .then((items) => {
          response.json({ items });
        })
        .catch((error) => {
          console.log(error);
          response.status(500).json({ error: error.message });
        });
      return;
    });
};

module.exports = { dbmOrder, dmbOrder };
