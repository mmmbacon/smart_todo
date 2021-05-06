const assignCategoryFromKeyword = function (userEntry) {
  category = "";
  if (userEntry.match(/book|read/i)) {
    category = "Books";
  }

  if (userEntry.match(/movie|watch/i)) {
    category = "Movies";
  }

  if (userEntry.match(/dining|eat|drink/i)) {
    category = "Dining";
  }
  if (userEntry.match(/product|buy|new|get/i)) {
    category = "Products";
  }
  return category;
};

//test cases

// console.log(assignCategoryFromKeyword("burn after reading"));
console.log(assignCategoryFromKeyword("ReAd the hobbit"));

module.exports = assignCategoryFromKeyword;
