const db = require('./db');
const allItems = require('./allItems');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } userId The user id
 * @param { string } itemId The item id
 * @returns { array } an array of user items
 */
const deleteItem = function(userId, itemId) {

  if (!userId || !itemId) {
    return Promise.resolve([]);
  }

  const queryString = `
  DELETE FROM items
  WHERE items.user_id = $1 AND items.id = $2;
  `;
  const params = [`${userId}`, `${itemId}`];

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = deleteItem;
