### TODO

* Come up with a cool name
* Update package.json with proper info
* README.md with Screenshots
* Develop Schedule / Timeline

### Details / Ideas

* Single Page App
* API Key and requests must be on the server
* Do we need a table for keywords?
  * Keep Keywords simple for now
* User journey vs. Technical explanation
  * User perspective (Infomercial - Super Cheesy)

### Stretch

* Fetch information for an item when you click it

### Roadmap

* Develop Schedule / Timeline
* Discuss skeleton
* Watch Andy's video
* Discuss what we expect as data from each other (Data Language)
  * DB / SERVER
  * SERVER / VENDOR API
  * SERVER / FRONT END
* Split SQL Queries out of Server/Endpoints file
  * Per-Query file
* Create seed data for users, items, possibly keyword
  * Review once more (measure twice cut once)
* Create testing folder (not a requirement to unit test)
* Research Vendor API's
  * Google Books
  * IMDB
  * Yelp
* Create individual branches

* HTML Scaffolding
  * Bootstrap / SASS Interface research
  * Placeholder Data for Front End
* Build REST API Endpoints
* Build SQL Queries

* Vendor API interface(s)
* AJAX Queries
* Styling

* TESTING!! (M&C?, Walkthrough)
* presentation planning
* book breakout?


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
  * A DAY of testing 
  * stretch


### Random Notes

//users/:userid/items//
//google api//
{
  keyword: lily's string
}

// user data //
{
  data: {
    userid: asdff,
    items: [list of items]
  }
  message:
}

