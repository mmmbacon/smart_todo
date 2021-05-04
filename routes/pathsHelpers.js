const { isItAMovie, isItABook, isItDining } = require("./helpers.js");
const createItem = require("../db/createItem");
const priority = null; //stretch FIXFIX

//Call apis in this order: book then dining then movie
const bdmOrder = function (userEntry, userId, response) {
  console.log("order: book then dining then movie");
  isItABook(userEntry)
    .then((result) => {
      if (result === "Books") {
        return result;
      }
      return isItDining(userEntry).then((result) => {
        if (result === "Dining") {
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

//Call apis in this order: book then movie then dining
const bmdOrder = function (userEntry, userId, response) {
  console.log("order: book then movie then dining");
  isItABook(userEntry)
    .then((result) => {
      if (result === "Books") {
        // console.log(`It is a book`)
        return result;
      }
      return isItAMovie(userEntry).then((result) => {
        if (result === "Movies") {
          // console.log(`It is a movie`)
          return result;
        }
        return isItDining(userEntry).then((result) => {
          if (result === "Dining") {
            // console.log(`It is an dining`)
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

//Call apis in this order: movie then book then dining
const mbdOrder = function (userEntry, userId, response) {
  console.log("order: movie then book then dining");
  isItAMovie(userEntry)
    .then((result) => {
      if (result === "Movies") {
        return result;
      }
      return isItABook(userEntry).then((result) => {
        console.log("result of book check:", result);
        if (result === "Books") {
          console.log("in book check result:", result);
          return result;
        }
        return isItDining(userEntry).then((result) => {
          console.log("result of dining check:", result);
          if (result === "Dining") {
            return result;
          }
          return "Products";
        });
      });
    })
    .then((categoryCode) => {
      console.log("categorycode", categoryCode);
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

//Call apis in this order: movie then dining then book
const mdbOrder = function (userEntry, userId, response) {
  console.log("order: movie then dining then book");
  isItAMovie(userEntry)
    .then((result) => {
      if (result === "Movies") {
        // console.log(`It is a movie`)
        return result;
      }
      return isItDining(userEntry).then((result) => {
        if (result === "Dining") {
          // console.log(`It is an dining`)
          return result;
        }
        return isItABook(userEntry).then((result) => {
          if (result === "Books") {
            // console.log(`It is a book`)
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

//Call apis in this order: dining then book then movie
const dbmOrder = function (userEntry, userId, response) {
  console.log("order: dining then book then movie");
  isItDining(userEntry)
    .then((result) => {
      if (result === "Dining") {
        // console.log(`It is an dining`)
        return result;
      }
      return isItABook(userEntry).then((result) => {
        if (result === "Books") {
          // console.log(`It is a book`)
          return result;
        }
        return isItAMovie(userEntry).then((result) => {
          if (result === "Movies") {
            // console.log(`It is a movie`)
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
        // console.log(`It is an dining`)
        return result;
      }
      return isItAMovie(userEntry).then((result) => {
        if (result === "Movies") {
          // console.log(`It is a movie`)
          return result;
        }
        return isItABook(userEntry).then((result) => {
          if (result === "Books") {
            // console.log(`It is a book`)
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

module.exports = { bdmOrder, bmdOrder, mbdOrder, mdbOrder, dbmOrder, dmbOrder };
