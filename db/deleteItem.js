const db = require('./db');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } user_id The user id
 * @returns { array } an array of items
 */
const deleteItem = function(user_id, item_id) {

  const queryString = `
  SELECT * from items
  JOIN users ON items.user_id = users.id
  WHERE items.user_id = $1
  `;
  const params = [`${user_id}`];

  return db.query(queryString, params)
    .then((res)=> {
      return res.rows;
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = allItems;
