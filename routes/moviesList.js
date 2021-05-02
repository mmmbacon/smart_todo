const express = require('express');
const router  = express.Router();

module.exports = (db) => {
    //route is just "/" because full route is already in server.js
  router.get("/", (req, res) => {

  });
  return router;
};
