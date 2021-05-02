const db = require('./db');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } user_id The user id
 * @returns { array } an array of items
 */
const allItems = function(userId) {

  const queryString = `
  SELECT * from items
  JOIN users ON items.user_id = users.id
  WHERE items.user_id = $1
  `;
  const params = [`${userId}`];

  return db.query(queryString, params)
    .then((res)=> {
      return res.rows;
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = allItems;
