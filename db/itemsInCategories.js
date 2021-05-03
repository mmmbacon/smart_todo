const db = require('./db');

/**
 * Postgres query function for returning item counts per category
 * @param { string } userId The user id
 * @param { string } categoryId The user id
 * @returns { array } an array of items
 */
const itemsInCategories = function(userId, categoryId) {

  const queryString = `
  SELECT categories.id, categories.name, COUNT(*) from items
  JOIN users ON items.user_id = users.id
  JOIN categories ON items.category_id = categories.id
  WHERE items.user_id = $1 AND category_id = $2
  GROUP BY categories.id, categories.name
  `;
  const params = [`${userId}`, `${categoryId}`];

  return db.query(queryString, params)
    .then((res)=> {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = itemsInCategories;
