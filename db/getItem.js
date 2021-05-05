const db = require('./db');

/**
 * Postgres query function for returning a single item given a user id and item id
 * @param { string } userId The user id
 * @param { string } itemId The item id
 * @returns { object } a single item object
 */
const getItem = function(userId, itemId) {

  if (!userId || !itemId) {
    return Promise.resolve([]);
  }

  const queryString = `
  SELECT items.id as item_id, description as item_description, date_created, date_due, priority, completed, category_id, categories.name as category_name
  FROM items
  JOIN categories ON items.category_id = categories.id
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
