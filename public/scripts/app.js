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
  const itemData =  [
    {
      id: 1,
      user_id: 1,
      category_id: 1,
      description: "Watch Superstore on Netflix",
      date_created: "2021-05-02T20:45:03.434Z",
      date_due: null,
      priority: null,
      completed: false,
      email: "sarah.worthington@hotmail.com",
      password: "password"
    },
    {
      id: 1,
      user_id: 1,
      category_id: 3,
      description: "Drink a cappucino",
      date_created: "2021-05-02T20:45:03.434Z",
      date_due: null,
      priority: null,
      completed: false,
      email: "sarah.worthington@hotmail.com",
      password: "password"
    },
    {
      id: 1,
      user_id: 1,
      category_id: 4,
      description: "Buy a new sofa",
      date_created: "2021-05-02T20:45:03.434Z",
      date_due: null,
      priority: null,
      completed: false,
      email: "sarah.worthington@hotmail.com",
      password: "password"
    },
    {
      id: 1,
      user_id: 1,
      category_id: 2,
      description: "Read The Hobbit",
      date_created: "2021-05-02T20:45:03.434Z",
      date_due: null,
      priority: null,
      completed: false,
      email: "sarah.worthington@hotmail.com",
      password: "password"
    }
  ];

  // Create HTML to display each item
  const createItem = function(item) {
    const displayItem = `
      <a href="#" class="list-group-item list-group-item-action">${item}</a>
    `;
    return displayItem;
  };

  const renderItems = function(items) {
    for (const item of items) {
      if (item.category_id === 1) {
        const $item = createItem(item.description);
        $('#watch-container').append($item);
      }
      if (item.category_id === 2) {
        const $item = createItem(item.description);
        $('#read-container').append($item);
      }
      if (item.category_id === 3) {
        const $item = createItem(item.description);
        $('#eat-container').append($item);
      }
      if (item.category_id === 4) {
        const $item = createItem(item.description);
        $('#buy-container').append($item);
      }
    }
  }

  renderItems(itemData);
});
