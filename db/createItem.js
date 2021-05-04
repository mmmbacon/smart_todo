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

  const queryString = `
  INSERT INTO items ( user_id, category_id, description, priority )
  SELECT id as category_id FROM categories
  WHERE categories.id = $2
  VALUES ( $1, category_id, $3, $4 );
  `;
  const params = [userId, categoryName, `${description}`, priority];

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = createItem;
