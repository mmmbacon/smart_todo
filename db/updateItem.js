const db = require('./db');
const allItems = require('./allItems');
const { resolveInclude } = require('ejs');


/**
 * Postgres query function for updating an item for a particular user
 * @param { string } userId The user id of who owns the item
 * @param { string } itemId The item id of the item being updated
 * @param { number } category The irem category id
 * @param { string } description The item description
 * @param { boolean } completed The irem completed status
 * @param { string } dateDue The item due date
 * @param { number } priority The item priority
 * @returns { array } an array of all the users items
 */
const updateItem = function(userId, itemId, category, description, completed, dateDue, priority) {

  //Prepend the query string
  let queryString = `
  UPDATE items
  SET`;

  if (!userId || !itemId) {
    return Promise.resolve([]);
  }

  let params = [`${userId}`, `${itemId}`];

  if (category) {
    params.push(`${category}`); //Type integer
    queryString += `${ params.length > 3 ? ', \n' : ' ' }category_id = $${params.length}`;
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
  AND items.id = $2;`;

  return db.query(queryString, params)
    .then((res)=> {
      return allItems(userId);
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = updateItem;
