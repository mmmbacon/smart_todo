const db = require('./db');

/**
 * Postgres query function for updating an item for a particular user
 * @param { string } userId The user id
 * @param { string } itemId The item id
 * @returns { array } an array of a,l the users items
 */
const getItem = function(userId, itemId, options) {

  let queryString = `UPDATE`;
  let params = [`${userId}`, `${itemId}`];
  let length = 0;

  if (options) {

    if (options.description) {
      queryString += `
       items SET items.description = $${params.length}${params.length > 3 ? `,` : ` `}`;
    }

    if (options.date_due) {
      queryString += `
       items.date_due = $${params.length}${params.length > 4 ? `,` : ` `}`;
    }

    if (options.category) {
      queryString += `
       items.date_due = $${params.length}${params.length > 5 ? `,` : ` `}`;
    }

    if (options.priority) {
      queryString += `
       items.priority = $${params.length}${params.length > 6 ? `,` : ` `}`;
    }

    if (options.completed) {
      queryString += `
       items.completed = $${params.length}
       `;
    }
  }

  queryString += `WHERE items.user_id = $1 AND items.id = $2;`;

  console.log(queryString);

  return db.query(queryString, options)
    .then((res)=> {
      return res.rows[0];
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = getItem;
