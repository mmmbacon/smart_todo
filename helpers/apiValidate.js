const filter = require("./filterArticles");

/**
 * compares a query against a queryResult and returns a score of how many matches it found
 * @param {array}} query The queryable API string
 * @param {array}} queryResult The result from the API
 * @returns {number} Score between 0 and n
 */
const apiValidate = function (query, queryResult) {
  if (!query || !queryResult) {
    return undefined;
  }

  let score = 0;

  const filteredQuery = filter(query);
  const filteredQueryResult = filter(queryResult);

  for (const item1 in filteredQuery) {
    for (const item2 in filteredQueryResult) {
      if (item1 === item2) {
        score++;
      }
    }
  }

  //Return a normalized score
  return score / filteredQuery.length;
};

module.exports = apiValidate;
