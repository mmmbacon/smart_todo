const db = require('./db');

/**
 * Postgres query function for returning item counts per category
 * @param { string } userId The user id
 * @returns { object } object holding all items and their counts
 */
const itemsInCategories = function(userId) {

  const queryString = `
  SELECT categories.id, categories.name, COUNT(*) from items
  JOIN users ON items.user_id = users.id
  JOIN categories ON items.category_id = categories.id
  WHERE items.user_id = $1
  GROUP BY categories.id, categories.name
  ORDER BY categories.id
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

module.exports = itemsInCategories;
