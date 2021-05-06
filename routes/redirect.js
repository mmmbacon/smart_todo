//Since it's an SPA, whenever the user finds a page that doesn't exist, redirect them back to the main page rather than showing a 404 error
const express = require("express");
const _ = require("lodash");

const router = express.Router();
module.exports = (db) => {
  router.get("/*", (request, response) => {
    response.redirect("/");
  });
};
