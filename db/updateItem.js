const db = require('./db');
const allItems = require('./allItems');

/**
 * Postgres query function for updating an item for a particular user
 * @param { string } userId The user id of who owns the item
 * @param { string } itemId The item id of the item being updated
 * @param { number } categoryName The item category id
 * @param { string } description The item description
 * @param { boolean } completed The irem completed status
 * @param { string } dateDue The item due date
 * @param { number } priority The item priority
 * @returns { array } an array of all the users items
 */
const updateItem = function(userId, itemId, categoryName, description, completed, dateDue, priority) {

  //Prepend the query string
  let queryString = `
  UPDATE items
  SET`;

  if (!userId || !itemId) {
    return Promise.resolve([]);
  }

  let params = [`${userId}`, `${itemId}`];

  if (categoryName) {
    params.push(`${categoryName}`); //Type integer
    queryString += `${ params.length > 3 ? ', \n' : ' ' }category_id = (
      SELECT id FROM categories WHERE name = $${params.length}
    )`;
  }

  if (description) {
    params.push(`${description}`); //Type string
    queryString += `${ params.length > 3 ? ', \n' : ' ' }description = $${params.length}`;
  }

  if (completed) {
    params.push(`${completed}`); // Type boolean
    queryString += `${ params.length > 3 ? ', \n' : ' ' }completed = $${params.length}`;
  }

  if (dateDue) {
    params.push(`${dateDue}`); // Type string
    queryString += `${ params.length > 3 ? ', \n' : ' ' }date_due = $${params.length}`;
  }

  if (priority) {
    params.push(`${priority}`); // Type boolean
    queryString += `${ params.length > 3 ? ', \n' : ' ' }priority = $${params.length}`;
  }

  queryString += `
  WHERE items.user_id = $1
  AND id = $2;`;

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = updateItem;
