
const assignCategoryFromKeyword = function(userEntry) {
  const userEntryNoCase = userEntry.toLowerCase();
  const userEntryArray = userEntryNoCase.split(' ');
  let categoryCode = null;
  if (userEntryArray.includes('watch') || userEntryArray.includes('movie')) {
    categoryCode = "Movies";
  }
  if (userEntryArray.includes('read') || userEntryArray.includes('book')) {
    categoryCode = "Books";
  }
  if (userEntryArray.includes('eat') || userEntryArray.includes('restaurant')) {
    categoryCode = "Dining";
  }
  if (userEntryArray.includes('buy') || userEntryArray.includes('product')) {
    categoryCode = "Products";
  }
  return categoryCode;
}


//test case

console.log(assignCategoryFromKeyword('Watch burn after reading'));
console.log(assignCategoryFromKeyword('Buy movie'));
