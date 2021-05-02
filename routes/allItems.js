const express = require('express');
const router = express.Router();

module.exports = {
  //likely not really needed since we're never showing the full, unsorted list of items
  getItems: (db) => {
    //route is just "/" because full route is already in server.js
    router.get("/", (req, res) => {

    });
    return router;
  },
  //Create a new item
  postItems: (db) => {
    router.get("/", (req, res) => {

    });
    return router;
  }
};
