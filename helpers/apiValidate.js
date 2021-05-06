const filter = require("./filterArticles");

/**
 * compares a query against a queryResult and returns a score of how many matches it found
 * @param {array}} query The queryable API string
 * @param {array}} queryResult The result from the API
 * @returns {number} Score between 0 and n
 */
const apiValidate = function(query, queryResult) {
  if (!query || !queryResult) {
    return undefined;
  }

  let score = 0;

  const filteredQuery = filter(query);
  const filteredQueryResult = filter(queryResult);

  console.log('line 19: filtered query result: ', filteredQueryResult);

  //Compare strings for matches
  for (const item1 of filteredQuery) {
    for (const item2 of filteredQueryResult) {
      console.log('item1: ', item1, 'item2: ', item2);
      if (item1 === item2) {
        score++;
      }
    }
  }

  console.log('Computed Match Score: ', score);
  console.log('Query: ', filteredQuery);
  console.log('Query Result Length: ', filteredQueryResult.length);
  console.log('Query Result: ', filteredQueryResult);

  //Return a normalized score
  return score / filteredQueryResult.length;
};

module.exports = apiValidate;
