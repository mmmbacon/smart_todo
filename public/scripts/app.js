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
  // Create HTML to display each item
  const createItem = function(item) {
    const displayItem = `
      <a href="#" class="list-group-item list-group-item-action">${item}</a>
    `;
    return displayItem;
  };

  const renderItems = function(items) {
    for (const item of items) {
      const $item = createItem(item.description)

      if (item.category_id === 1) {
        $('#watch-container').append($item);
      }
      if (item.category_id === 2) {
        $('#read-container').append($item);
      }
      if (item.category_id === 3) {
        $('#eat-container').append($item);
      }
      if (item.category_id === 4) {
        $('#buy-container').append($item);
      }
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
