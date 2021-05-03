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
        <div class="list-group-item list-group-item-action">${escape(item)}</div>
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
    const loadAllItems = function() {
      $.ajax('/users/1/items', {
        method: 'GET',
        dataType: 'JSON'
      }).then((items) => {
        renderItems((items.items));
      }).catch((err) => {
        console.log('Error: ', err);
      });
    };

    loadAllItems();

    // Display newest item in appropriate category container
    const loadNewItem = function() {
      $.ajax('/users/:userid/items', {
        method: 'GET',
        dataType: 'JSON'
      }).then((items) => {
        const newItem = items[items.length - 1].item_description;
        const category = getCategoryName(newItem.category_id);
        createItem(newItem)
        $(category).append(newItem);
        // $('#confirmation').show().html('Your item has been added to the ${category}.');
      }).catch((err) => {
        console.log('Error: ', err);
      });
    };

    // Add a new item
    $('form').on('submit', function(event) {
      event.preventDefault();
      $('#error').hide();

      // Form validation: empty item
      if (!$('#new-item-text').val().trim()) {
        return $('#error').show().html('<strong>Oops!</strong> You forgot to type something...');
      }

      $.ajax({
        url: '/users/:userid/items',
        method: 'POST',
        data: $(this).serialize(),
      }).then(() => {
        loadNewItem();
        $('#new-item-text').val('').focus();
      }).catch((err) => {
        console.log('Error: ', err);
      });
    });
  });
