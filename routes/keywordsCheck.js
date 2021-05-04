
const assignCategoryFromKeyword = function(userEntry) {
  const userEntryNoCase = userEntry.toLowerCase();
  const userEntryArray = userEntryNoCase.split(' ');
  let categoryCode = null;
  if (userEntryArray.includes('watch') || userEntryArray.includes('movie')) {
    categoryCode = 1;
  }
  if (userEntryArray.includes('read') || userEntryArray.includes('book')) {
    categoryCode = 2;
  }
  if (userEntryArray.includes('eat') || userEntryArray.includes('restaurant')) {
    categoryCode = 3;
  }
  if (userEntryArray.includes('buy') || userEntryArray.includes('product')) {
    categoryCode = 4;
  }
  return categoryCode;
}


//test case

console.log(assignCategoryFromKeyword('Watch burn after Reading'));
