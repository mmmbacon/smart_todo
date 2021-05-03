// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function() {
  // Assign category name to item based on id
  const getCategoryName = function(category_id) {
    switch (category_id) {
      case 1:
        return '#watch-container';
      case 2:
        return '#read-container';
      case 3:
        return '#eat-container';
      case 4:
        return '#buy-container';
      // Is there a scenario where an item may have a NULL category_id?
      // default:
        // return '#all';
    }
  };

  // Create HTML to display each item
  const createItem = function(item) {
    const displayItem = `
      <a href="#" class="list-group-item list-group-item-action">${item}</a>
    `;
    return displayItem;
  };

  // Place item in appropriate category container
  const renderItems = function(items) {
    for (const item of items) {
      const category = getCategoryName(item.category_id);
      const $item = createItem(item.item_description);
      $(category).append($item);
    }
  }

  // Display existing items on page load
  const loadItems = function() {
    $.ajax('/users/1/items', {
      method: 'GET',
      dataType: 'JSON'
    }).then((items) => {
      renderItems((items.items));
    }).catch((err) => {
      console.log('Error: ', err);
    });
  };

  loadItems();
});
