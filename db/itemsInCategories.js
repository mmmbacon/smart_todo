const db = require('./db');

/**
 * Postgres query function for returning item counts per category, with an option to sort the return
 * @param { string } userId The user id
 * @param { string } orderBy The column to filter by
 * @param { string } direction The direction to filter (ASC = Ascending, DESC = Descending) Default: DESC
 * @returns { object } object holding all items and their counts, sorted by parameters 2 and 3
 */
const itemsInCategories = function (userId, orderBy, direction) {

  if (!userId) {
    return Promise.resolve([]);
  }

  let queryString = `
  SELECT categories.id, categories.name, COUNT(*) as item_count from items
  JOIN users ON items.user_id = users.id
  JOIN categories ON items.category_id = categories.id
  WHERE items.user_id = $1 AND categories.name != 'Products'
  GROUP BY categories.id, categories.name `;

  //Order By
  if (!orderBy) {
    queryString += `ORDER BY categories.id `;
  }

  if (orderBy === 'count') {
    queryString += `ORDER BY COUNT(*) `;
  }

  if (orderBy === 'name') {
    queryString += `ORDER BY categories.name `;
  }

  //Direction
  if (!direction || direction === 'DESC') {
    queryString += `DESC;`;
  }

  if (direction === 'ASC') {
    queryString += `ASC;`;
  }

  // console.log(queryString);

  const params = [`${userId}`];

  return db.query(queryString, params)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = itemsInCategories;
