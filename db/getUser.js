const db = require('./db');

/**
 * Postgres query function for returning a user with given password
 * @param { string } email The user email address
 * @returns { object } the user object
 */
const getUser = function(email) {

  if (!email) {
    return Promise.resolve({});
  }

  const queryString = `
  SELECT users.email, users.first_name, users.last_name, COUNT(*) AS total_item_count
  FROM items
  JOIN users ON items.user_id = users.id
  WHERE users.email = $1
  GROUP BY users.email, users.first_name, users.last_name
  `;
  const params = [`${email}`];

  return db.query(queryString, params)
    .then((res)=> {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err)=> {
      return err;
    });
};

module.exports = getUser;
