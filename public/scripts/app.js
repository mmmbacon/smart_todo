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
  let globalState = {
    currentItemId: null,
  };

  // Prevent cross-site scripting
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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
      <div id="item-container" class="list-item list-group-item list-group-item-action" data-id="${item.item_id}">
        <span>
          <input class="form-check-input" type="checkbox">
          <label class="form-check-label item" for="completed">${escape(item.item_description)}</label>
        </span>
        <span>
          <i class="fas fa-edit edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
        </span>
      </div>
    `;
    return displayItem;
  };

  // Place item in appropriate category container
  const renderItems = function(items) {
    $('#watch-container').empty();
    $('#read-container').empty();
    $('#eat-container').empty();
    $('#buy-container').empty();

    for (const item of items) {
      const category = getCategoryName(item.category_id);
      const $item = createItem(item);
      $(category).append($item);
    }
  };

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

  // Add a new item
  $('#newItem').on('submit', function(event) {
    event.preventDefault();
    $('#error').hide();

    // Form validation: empty item
    if (!$('#new-item-text').val().trim()) {
      return $('#error').show().html('<i class="fas fa-exclamation-triangle"></i><strong>Oops!</strong> You forgot to type something...');
    }

    $.ajax({
      url: '/users/1/items',
      method: 'POST',
      data: $(this).serialize(),
    }).then(() => {
      loadItems();
      $('#new-item-text').val('').focus();
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Carry over item id
  $('#category-container').on('click', '#item-container', function(event) {
    globalState.currentItemId = event.currentTarget.dataset.id;
  });

  // Delete item
  $('#delete').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      url: `/users/1/items/${globalState.currentItemId}`,
      method: 'DELETE',
    }).then((items) => {
      renderItems(items.items);
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Edit item
  $('#editItem').on('submit', function(event) {
    event.preventDefault();
    const category = $('#edit-category').val();
    const completed = $('#edit-completed').is(':checked');

    $.ajax({
      url: `/users/1/items/${globalState.currentItemId}`,
      method: 'PUT',
      data: {
        category_name: category,
        completed: completed,
      }
    }).then((items) => {
      renderItems(items.items);
      $('#editModal').modal('hide');
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });
});

