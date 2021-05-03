const db = require('./db');

/**
 * Postgres query function for returning item counts per category
 * @param { string } userId The user id
 * @param { string } categoryId The user id
 * @returns { object } an object showing the single most relevant item type
 */
const mostRelevantCategory = function(userId) {

  const queryString = `
  SELECT categories.id, categories.name, COUNT(*) from items
  JOIN users ON items.user_id = users.id
  JOIN categories ON items.category_id = categories.id
  WHERE items.user_id = $1
  GROUP BY categories.id, categories.name
  LIMIT 1;
  `;
  const params = [`${userId}`];

  return db.query(queryString, params)
    .then((res)=> {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = mostRelevantCategory;
