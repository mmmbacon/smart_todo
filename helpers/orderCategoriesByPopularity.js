const _ = require("lodash");

const orderCategoriesByPopularity = function (object) {
  const orderedCategoriesArray = [];

  for (const record of object) {
    if (record.name === "Books" || record.name === "Movies")
      orderedCategoriesArray.push(record.name);
  }
  return orderedCategoriesArray;
};

module.exports = orderCategoriesByPopularity;
