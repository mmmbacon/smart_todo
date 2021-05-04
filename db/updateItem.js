const db = require('./db');
const allItems = require('./allItems');


/**
 * Postgres query function for updating an item for a particular user
 * @param { string } userId The user id
 * @param { string } itemId The item id
 * @returns { array } an array of a,l the users items
 */
const updateItem = function(userId, itemId, category, description, completed, dateDue, priority) {

  let queryString = `
  UPDATE items
  SET`;
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
