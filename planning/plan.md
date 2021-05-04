### Requirements

Each todo created should be categorized as one of:

  * Film / Series (To watch)
  * Restaurants, cafes, etc. (To eat)
  * Books (To read)
  * Products (To buy)

In order to determine the category the app will probably need to use various API services such as those offered by Google, Wolfram Alpha, Rotten Tomatoes, Amazon, Yelp and others.

API services mentioned above are only suggestions. You will have to investigate how to balance the accurate categorization of items with having to deal with multiple API endpoints.

Users should be able to change a category of an item in case it was mis-categorized or could not be categorized at all.

<s>Users should be able to register, log in, log out and update their profile.</s>

### TODO

* Come up with a cool name
* Update package.json with proper info
* README.md with Screenshots
* Develop Schedule / Timeline
* Look into cookies / hard coded routes

### Details / Ideas

* Single Page App
* API Key and requests must be on the server
* Do we need a table for keywords?
  * Keep Keywords simple for now
* User journey vs. Technical explanation
  * User perspective (Infomercial - Super Cheesy)

### Stretch

* Fetch information for an item when you click it
* Use Keywords to filter automatically
* JSDocs? 

### Roadmap

* Develop Schedule / Timeline ✅
* Discuss skeleton ✅ 
* Watch Andy's video ✅
* Discuss what we expect as data from each other (Data Language) ✅
  * DB / SERVER
  * SERVER / VENDOR API
  * SERVER / FRONT END
* Split SQL Queries out of Server/Endpoints file ✅
  * Per-Query file ✅
* Create seed data for users, items, possibly keyword ✅
  * Review once more (measure twice cut once) ✅
* Create testing folder (not a requirement to unit test) ✅
* Research Vendor API's ✅
  * Google Books ✅
  * IMDB ✅
  * Yelp ✅
* Create individual branches ✅

* HTML Scaffolding ✅
  * Bootstrap / SASS Interface research ✅
  * Placeholder Data for Front End ✅

* Build REST API Endpoints (brianna)
* Build SQL Queries (brandon)

* Vendor API interface(s)
  * Wrap up tonight
  * Needs optimizing (Discussion on making more accurate queries)
  * Lily and Brandon to help out
* AJAX Queries
  * Edit & Delete outstanding
  * Get and Post ✅

* Styling
  * Wednesday
  * Bootstrap
  * Bootstrap theming
  * Needs work and cleanup
  * Logo 
  * Name Finalization (Hippo)
  * Font selection
  * Coolors.co Color

* TESTING!! (M&C?, Walkthrough)
  * Test Thursday
  * Unit Testing
  * Functionality Testing

* Presentation Planning
  * User Story Style (5 mins)
    * Develop story
      * Explanation of why the user needs the app
      * Working through the process
    * Pick roles
  * Thursday
  * Book Breakout


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

