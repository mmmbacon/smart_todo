const express = require('express');
const router = express.Router();

module.exports = {
  getSingleItem: (db) => {
      //route is just "/" because full route is already in server.js
    router.get("/", (req, res) => {

    });
    return router;
  },
  //Edit individual item
  putSingleItem: (db) => {
    router.put("/", (req, res) => {

    });
    return router;
  }
}
