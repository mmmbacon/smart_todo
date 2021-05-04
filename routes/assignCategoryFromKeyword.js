const assignCategoryFromKeyword = function (userEntry) {
  const userEntryNoCase = userEntry.toLowerCase();
  const userEntryArray = userEntryNoCase.split(" ");
  let category = null;

  if (userEntryArray.includes("watch") || userEntryArray.includes("movie")) {
    category = "Movies";
  }
  if (userEntryArray.includes("read") || userEntryArray.includes("book")) {
    category = "Books";
  }
  if (userEntryArray.includes("eat") || userEntryArray.includes("restaurant")) {
    category = "Dining";
  }
  if (userEntryArray.includes("buy") || userEntryArray.includes("product")) {
    category = "Products";
  }
  return category;
};

//test cases

// console.log(assignCategoryFromKeyword('Watch burn after reading'));
// console.log(assignCategoryFromKeyword('Buy movie'));

module.exports = assignCategoryFromKeyword;
