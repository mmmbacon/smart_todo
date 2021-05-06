$(document).ready(function () {

  //Set up drag and drop
  $(init);

  function init() {
    //Bug alert!! Can't drag and drop if the list is empty
    $("#read-container, #watch-container, #eat-container, #buy-container").sortable({
      connectWith: ".connected-sortable",
    }).disableSelection();
  }


  // To carry item_id into the modal
  let modalStateId = null;

  // Prevent cross-site scripting
  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Assign category name to item based on id
  const getCategoryName = function (categoryId) {
    switch (categoryId) {
      case 1:
        return '#watch-container';
      case 2:
        return '#read-container';
      case 3:
        return '#eat-container';
      case 4:
        return '#buy-container';
    }
  };

  // Toggle completed checkbox
  const checkboxClicked = function () {
    const id = $(this).parent().parent().data('id');
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
  const createItem = function (item) {
    const displayItem = `
      <div id="item-container" class="list-item list-group-item list-group-item-action" data-id="${item.item_id}">
        <span>
          <input class="form-check-input completed" type="checkbox" name="completed" id="item_${item.item_id}">
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
  const renderItems = function (items) {
    $('#watch-container').empty();
    $('#read-container').empty();
    $('#eat-container').empty();
    $('#buy-container').empty();

    for (const item of items) {
      const category = getCategoryName(item.category_id);
      const $item = createItem(item);
      $(category).append($item);

      // Set completed items to checked
      if (item.completed) {
        $(`#item_${item.item_id}`).prop('checked', true);
      }
    }

    // Listen for checkbox click
    $('input[type=checkbox]').on('click', checkboxClicked);
  };

  // Display existing items on page load
  const loadItems = function () {
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
  $('#newItem').on('submit', function (event) {
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

  // Link item_id to item in container
  $('#category-container').on('click', '#item-container', function (event) {
    modalStateId = event.currentTarget.dataset.id;
  });

  // Delete item
  $('#delete').on('click', function (event) {
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
  $(window).on('shown.bs.modal', function () {
    $('#editModal').modal('show');
    let isComplete = false;

    $.ajax({
      url: `/users/1/items/${modalStateId}`,
      method: 'GET',
    }).then((items) => {
      $('input[name="edit-description"]').val(`${items.item.item_description}`);

      $(`select#edit-category option[value="${items.item.category_name}"]`).attr('selected', 'selected');

      if (items.item.completed) {
        isComplete = true;
      }

      $('#edit-completed').prop('checked', isComplete);
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  // Edit item
  $('#editItem').on('submit', function (event) {
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
});


