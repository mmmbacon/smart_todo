### Details

* Single Page App
* API Key and requests must be on the server
* Do we need a table for keywords?
  * Keep Keywords simple for now

### Stretch

* Fetch information for an item when you click it

### Roadmap

* Discuss skeleton

* DATABASE
  * Write Database query Logic
    * Users
    * Items

* REST API

  * Write Endpoint Logic

    ### users
    * <s>***B GET** users/:userid/items               <-- Get all Users*</s>
    * <s>**R GET**  users/:userid                     <-- Get specific User (items for that user)</s>
    * <s>*E PUT     users/:id                         <-- Edit User Info(stretch)*</s>
    * <s>**A POST** users/:userid                     <-- Maybe not needed></s>
    * <s>*D DELETE  users/:id                         <-- Edit User Info(ignore)*</s>

    ### items

    * B **GET**     users/:userid/items               <-- Get all Items
    * B **GET**     users/:userid/items/:category     <-- All items in a category
    * *R GET        users/:userid/items/:id           <-- Get specific Item(maybe)*
    * E **PUT**     users/:userid/items/:itemid       <-- Editing(completed) a specific Item
    * A **POST**    users/:userid/items/              <-- Create a new Item
    * D **DELETE**  users/:userid/items/:itemid       <-- Delete an Item

* FRONT END
  * Write front end HTML - Index.html
    * Single Page HTML
      * Navbar
      * New Item Form
      * Edit Category Form
      * Content Panel
        * Item Category Panels
  * Write front end Script 
    * AJAX
      * Endpoints to match our REST API
      * 
    * jQuery
      * Animations for sliding the form panels up and down
      * (Stretch) Drag and drop items to recategorize

* TESTING
  * stretch
