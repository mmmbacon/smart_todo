// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect()
  .then((msg) => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

module.exports = db;
