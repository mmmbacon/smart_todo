const db = require('./db');
const allItems = require('./allItems');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } user_id The user id
 * @param { string } item_id The item id
 * @returns { array } an array of items
 */
const deleteItem = function(user_id, item_id) {

  const queryString = `
  DELETE FROM items
  WHERE items.user_id = $1 AND items.id = $2;
  `;
  const params = [`${user_id}`, `${item_id}`];

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(user_id);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = deleteItem;
