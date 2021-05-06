$(document).ready(function() {
  //Drag and drop
  const init = function() {
    $("#read-container, #watch-container, #eat-container, #buy-container").sortable({
      connectWith: ".connected-sortable",
    }).disableSelection();
  };

  $(init);

  // To carry item_id into the modal
  let modalStateId = null;

  // Prevent cross-site scripting
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Assign category name to item based on id
  const getCategoryName = function(categoryId) {
    switch (categoryId) {
    case 1:
      return 'watch';
    case 2:
      return 'read';
    case 3:
      return 'eat';
    case 4:
      return 'buy';
    }
  };

  // Toggle completed checkbox
  const checkboxClicked = function() {
    const id = $(this).parent().data('id');
    const completed = $(this).is(':checked');

    $.ajax({
      url: `/users/1/items/${id}`,
      method: 'PUT',
      data: {
        completed: completed,
      }
    }).catch((err) => {
      console.log('Error: ', err);
    });
  };

  // Create HTML to display each item
  const createItem = function(item) {
    const displayItem = `
      <div class="item-container list-item list-group-item" data-id="${item.item_id}">
          <input class="form-check-input completed" type="checkbox" name="completed" id="item_${item.item_id}">
          <div class="flex-grow-1"><label class="form-check-label item" for="completed">${escape(item.item_description)}</label></div>
          <i class="bi bi-pencil-square edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
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
      $(`#${category}-container`).append($item);

      // Set completed items to checked
      if (item.completed) {
        $(`#item_${item.item_id}`).prop('checked', true);
      }
    }

    // Listen for checkbox click
    $('input[type=checkbox]').on('click', checkboxClicked);
  };

  // Display existing items on page load
  const loadItems = function() {
    $.ajax('/users/1/items', {
      method: 'GET',
      dataType: 'JSON'
    }).then(({ items }) => {
      renderItems((items));
    }).catch((err) => {
      console.log('Error: ', err);
    });
  };

  loadItems();

  // Add a new item
  $('#newItem').on('submit', function(event) {
    event.preventDefault();
    $('#error').hide();
    const newItem = $('#new-item-text').val();

    // Form validation: empty item
    if (!newItem.trim()) {
      $('#error').show(500).html('<i class="fas fa-exclamation-triangle"></i>Oops! You forgot to type something.');
      $('#error').delay(3000).hide(500);
      return;
    }

    // Form validation: character limit
    if (newItem.length > 255) {
      $('#error').show(500).html('<i class="fas fa-exclamation-triangle"></i>Oops! Your item is too long.');
      $('#error').delay(3000).hide(500);
      return;
    }

    $.ajax({
      url: '/users/1/items',
      method: 'POST',
      data: $(this).serialize(),
    }).then((items) => {
      const index = items.items.length - 1;
      const newItemCategoryId = items.items[index].category_id;
      let newItemCategory = getCategoryName(newItemCategoryId);

      loadItems();
      $('#new-item-text').val('').focus();

      // Display confirmation message
      $('#confirm').show(500).html(`<i class="far fa-check-circle"></i> The item was added to the <strong>${newItemCategory}</strong> category.`);
      $('#confirm').delay(3000).hide(500);
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Link item_id to item in container
  $('#category-container').on('mousedown', '.item-container', function(event) {
    modalStateId = event.currentTarget.dataset.id;
    console.log(modalStateId);
  });

  // Delete item
  $('#delete').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      url: `/users/1/items/${modalStateId}`,
      method: 'DELETE',
    }).then((items) => {
      renderItems(items.items);
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Pre-populate edit form
  $(window).on('shown.bs.modal', function() {
    // Reset category selection
    $(`select#edit-category option`).removeAttr('selected');

    $.ajax({
      url: `/users/1/items/${modalStateId}`,
      method: 'GET',
    }).then(({ item }) => {
      $('input[name="edit-description"]').val(`${item.item_description}`);

      $(`select#edit-category option[value="${item.category_name}"]`).attr('selected', 'selected');

      $('#edit-completed').prop('checked', item.completed);

      $('#editModal').modal('show');
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Edit item
  $('#editItem').on('submit', function(event) {
    event.preventDefault();
    const description = $('#edit-description').val();
    const category = $('#edit-category').val();
    const completed = $('#edit-completed').is(':checked');

    $.ajax({
      url: `/users/1/items/${modalStateId}`,
      method: 'PUT',
      data: {
        item_description: description,
        category_name: category,
        completed: completed,
      }
    }).then(() => {
      loadItems();
      $('#editModal').modal('hide');
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  //Drag and drop
  $(".connected-sortable").sortable({
    receive: function(event, ui) {
      let holder = null;
      if (event.target.id === 'read-container') {
        holder = "Books";
      }
      if (event.target.id === 'watch-container') {
        holder = "Movies";
      }
      if (event.target.id === 'eat-container') {
        holder = "Dining";
      }
      if (event.target.id === 'buy-container') {
        holder = "Products";
      }

      $.ajax({
        url: `/users/1/items/${modalStateId}`,
        method: 'PUT',
        data: {
          category_name: holder,
        }
      }).catch((err) => {
        console.log('Error: ', err);
      });
    }
  });

});
