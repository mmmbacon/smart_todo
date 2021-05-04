const db = require('./db');
const allItems = require('./allItems');

/**
 * Postgres query function for returning all items given a user id
 * @param { number } userId
 * @param { number } categoryId The category id
 * @param { string } description The item description
 * @param { string } priority The item description
 * @returns { array } an array of user items
 */
const createItem = function(userId, categoryId, description, priority) {

  if (!userId || !categoryId) {
    return Promise.resolve([]);
  }

  const queryString = `
  INSERT INTO items ( user_id, category_id, description, priority )
  VALUES ( $1, $2, $3, $4 );
  `;
  const params = [userId, categoryId, `${description}`, priority];

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = createItem;
