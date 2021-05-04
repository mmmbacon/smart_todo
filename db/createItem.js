const db = require('./db');
const allItems = require('./allItems');

/**
 * Postgres query function for creating a new item for a given user
 * @param { number } userId
 * @param { number } categoryName The category id
 * @param { string } description The item description
 * @param { string } priority The item description
 * @returns { array } an array of user items
 */
const createItem = function(userId, categoryName, description, priority) {

  if (!userId || !categoryName) {
    return Promise.resolve([]);
  }

  const params = [userId, categoryName, description, priority];

  const queryString = `
  INSERT INTO items ( user_id, category_id, description, priority )
  VALUES ( $1, (
    SELECT id FROM categories
    WHERE name = $2
  ), $3, $4 );
  `;

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = createItem;
