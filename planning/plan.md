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

* Come up with a cool name ✅
* Update package.json with proper info 
* README.md with Screenshots ✅
* Develop Schedule / Timeline ✅
* Look into cookies / hard coded routes ✅
* Clean up comments, extra code, Lint

### Details / Ideas

* Single Page App
* API Key and requests must be on the server
* Do we need a table for keywords?
  * Keep Keywords simple for now
* User journey vs. Technical explanation
  * User perspective (Infomercial - Super Cheesy)

### Stretch

* Fetch information for an item when you click it ✅
* Use Keywords to filter automatically ✅
* JSDocs? 
* Spinner
* 1) Alerts - Bootstrap
* 2) Priority 
* 3) Drag-n-drop

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

* Build REST API Endpoints (brianna) ✅
* Build SQL Queries (brandon) ✅

* Vendor API interface(s) ✅
  * Wrap up tonight ✅
  * Needs optimizing (Discussion on making more accurate queries) ✅ (pending testing as well)
  * Lily and Brandon to help out ✅
* AJAX Queries 
  * Edit & Delete outstanding ✅
  * Get and Post ✅

* Styling
  * Wednesday
  * Bootstrap ✅
  * Bootstrap theming (Decided to just override styles)
  * Needs work and cleanup ✅
  * Logo ✅
  * Name Finalization (Hippo) ✅
  * Font selection ✅
  * Coolors.co Color ✅

* TESTING!! (M&C?, Walkthrough)
  * Test Thursday
  * Unit Testing ✅
  * Functionality Testing

* Presentation Planning
  * User Story Style (5 mins)
    * Develop story
      * Explanation of why the user needs the app
      * Working through the process
    * Pick roles
  * Thursday
  * Book Breakout

### Presentation Requirements

There is no set format for how you choose to present your midterms, but here are some suggestions on what you could include:
* Which project you chose and why
* What each of you did, individually
* Show us what you built (demo the app and show us the features)
* What challenges you had and how you overcame them
(whatever you don't include we’ll likely just ask you about)
No slide deck required, but we would like everyone to speak equally! You all put a lot of work in and you all deserve some limelight!
Please ensure that your presentations are 5 minutes or under! We will cut you off at the 5 minute mark.
This isn't something to stress out about, keep coding away but find some time to rehearse as a group!


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

