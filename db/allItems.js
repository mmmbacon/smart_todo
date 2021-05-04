const db = require('./db');

/**
 * Postgres query function for returning all items given a user id
 * @param { string } userId The user id
 * @returns { array } an array of items
 */
const allItems = function(userId) {

  if (!userId) {
    return Promise.resolve([]);
  }

  const queryString = `
  SELECT items.id as item_id, description as item_description, date_created, date_due, priority, completed, category_id, categories.name as category_name
  FROM items
  JOIN users ON items.user_id = users.id
  JOIN categories ON items.category_id = categories.id
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
