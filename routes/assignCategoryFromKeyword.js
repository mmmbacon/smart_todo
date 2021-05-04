const assignCategoryFromKeyword = function (userEntry) {
  if (userEntry.match(/book|read/)) {
    category = "Books";
  }

  if (userEntry.match(/movie|watch/)) {
    category = "Movies";
  }

  if (userEntry.match(/dining|eat/)) {
    category = "Dining";
  }
  if (userEntry.match(/product|buy/)) {
    category = "Products";
  }
  return category;
};

//test cases

console.log(assignCategoryFromKeyword("burn after reading"));
console.log(assignCategoryFromKeyword("word reading"));

module.exports = assignCategoryFromKeyword;
