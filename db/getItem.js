const db = require('./db');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } user_id The user id
 * @param { string } item_id The item id
 * @returns { array } an array of items
 */
const getItem = function(userId, itemId) {

  const queryString = `
  SELECT * FROM items
  WHERE items.user_id = $1 AND items.id = $2;
  `;
  const params = [`${userId}`, `${itemId}`];

  return db.query(queryString, params)
    .then((res)=> {
      return res.rows[0];
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = getItem;
