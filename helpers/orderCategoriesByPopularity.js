const _ = require("lodash");

const orderCategoriesByPopularity = function (object) {
  const orderedCategoriesArray = [];

  for (const record of object) {
    orderedCategoriesArray.push(record.name);
  }
  return orderedCategoriesArray;
};

//test cases

// console.log(
//   orderCategoriesByPopularity([
//     { id: 3, name: "Books", item_count: 2 },
//     { id: 2, name: "Dining", item_count: 4 },
//     { id: 4, name: "Movies", item_count: 1 },
//   ])
// );
// const pri = ["Books", "Dining", "Movies"];
// console.log(+_.isEqual(pri, ["Books", "Dining", "Movies"])); //lodash returns 1 if yes, 0 if no

module.exports = orderCategoriesByPopularity;
