## Requirements

Each todo created should be categorized as one of:

  * Film / Series (To watch)
  * Restaurants, cafes, etc. (To eat)
  * Books (To read)
  * Products (To buy)

In order to determine the category the app will probably need to use various API services such as those offered by Google, Wolfram Alpha, Rotten Tomatoes, Amazon, Yelp and others.

API services mentioned above are only suggestions. You will have to investigate how to balance the accurate categorization of items with having to deal with multiple API endpoints.

Users should be able to change a category of an item in case it was mis-categorized or could not be categorized at all.

<s>Users should be able to register, log in, log out and update their profile.</s>

## TODO

* Come up with a cool name ✅
* Update package.json with proper info 
* README.md with Screenshots ✅
* Develop Schedule / Timeline ✅
* Look into cookies / hard coded routes ✅
* Clean up comments, extra code, Lint

## Details / Ideas

* Single Page App
* API Key and requests must be on the server
* Do we need a table for keywords?
  * Keep Keywords simple for now
* User journey vs. Technical explanation
  * User perspective (Infomercial - Super Cheesy)

## Stretch

* Fetch information for an item when you click it ✅
* Use Keywords to filter automatically ✅
* JSDocs? 
* Spinner
* 1) Alerts - Bootstrap
* 2) Priority 
* 3) Drag-n-drop

## Roadmap

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

## Presentation Requirements

There is no set format for how you choose to present your midterms, but here are some suggestions on what you could include:
* Which project you chose and why
* What each of you did, individually
* Show us what you built (demo the app and show us the features)
* What challenges you had and how you overcame them
(whatever you don't include we’ll likely just ask you about)
No slide deck required, but we would like everyone to speak equally! You all put a lot of work in and you all deserve some limelight!
Please ensure that your presentations are 5 minutes or under! We will cut you off at the 5 minute mark.
This isn't something to stress out about, keep coding away but find some time to rehearse as a group!


## Random Notes

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



# Presentation (5 mins)

## Breakdown & Timeline

### Which project you chose and why:
  * We chose the smart todo app because the multiple vendor API's would be an opportunity for us to work with something we are uncomfortable with.
  * We liked the idea of the planning involved with making the app intelligent.
### What each of you did, individually:
  * Work was split vertically into different parts of the stack:
  * Planning, styling and stretch features were worked on as a group and in code pairing sessions.
### Show us what you built (demo the app and show us the features):
  * Running through from a user perspective on what problem we are solving with the app. 
    * Hey Fiona...
  * Features to present:
    * Show existing items that have been sorted by the application (Everything currently on the page has been sorted by the application)
    * Add a new item (success) 2 - 3 items success
    * Add a new item (fails) 3
      * Wrong Category - Drag and drop to fix
      * Wrong Title - from edit dialog
      * Completed Item - from edit dialog
      * Deletion - from edit dialog (Oops this movie was bad)
    * Completion of item - main page
    * Error cases
      * Empty input
      * 255+ characters
### What challenges you had and how you overcame them:
  * GIT workflow
    * Branching, Merge conflicts -> *Communication, planning workflow, practice and reading docs*
  * Technology challenges (Learning new libraries and features)
    * Drag and Drop, CSS Animations -> *Pair programming and reading docs*
    * Sheer amount of async code -> *Pair Programming*
    * Data Exchange Between Team members -> *Initial planning document and communication*
  * App Intelligence planning and design (optimizing results from multiple API's -> Uncharted Territory) -> *Communication, pair programming, breaking out helper functions and planning*

## Timeline

0:00 - 0:30: Introductions
  Brandon
  Brianna
  Lily

0:30 - 3:00: User Perspective

  B - Hey Lily, have you seen that new movie on Netflix called Mitchell's versus the Machines?

  L - No, I haven't, but that sounds SUPER interesting. Let me just write this down on my trusty old pen and paper.

  B - What?! You're still using pen and paper, you are such a luddite. It's 2021.

  L - Well what do you use? 

  B - I'm glad you asked. I just found this new app called Hippo. It's a super smart todo list that will automatically categorize tasks you need or want to accomplish. 

  BM - Screenshare

  L - I don't believe it. 

  B - Let me show you. Here are four categories of things I need to do. All I need to do is input the name of something I would like to watch, read, eat or purchase, and the app will automatically categorize the item.

  B - For example, let's add that movie you mentioned into the list. I just input the title of the movie into the input and submit it. The app will reach out into the internet and automatically figure out what category the item belongs in.

  BM - Type out and submit entry Mitchell's vs the Machines. 
  
    (correct) Wait for the API to return. - "Wow! look at that dancing hippo."

  L - Hmmm, ok. Maybe you got lucky.

  B - Here, i'll put in a restaraunt this time. 

  BM - Type out and submit entry Red Lobster. 

    (correct) Wait for the API to return. - "Wow! look at that dancing hippo."

  L - Hey I noticed a typo in one of your existing items. Can you edit items?

  B - No problem. That's an easy fix. While i'm in here I can also edit the completion status. 

  BM - Edit the alladin description, category, and completion status. Save the item. 

  L - Hey I seen a deletion option in the edit window. 

  B - Yeah, in fact my mom already got me this vacuum for my birthday so I can delete this one from the list. 

  BM - Delete vacuum item.

  B - Let's add another movie I really want to watch. 

  BM - Add 'Hitchhikers Guide to the Galaxy'. 

  (incorrect) Wait for the API to return.

  L - What if I wanted to read the book first?

  B - You can edit it through the edit dialog, or just grab the item and drag it into a new category.

  BM - Move hitchhikers guide into books.

  B - Another way to mark items as completed is to click the checkbox to the left of the item. 

  L - Wow! That is so incredible (throws book). 

4:00 - 5:00: Roles, Why we chose this project, and challenges

  * Roles
    * Brandon
    * Brianna
    * Lily

  * GIT workflow
      * Branching, Merge conflicts -> *Communication, planning workflow, practice and reading docs*
    * Technology challenges (Learning new libraries and features)
      * Drag and Drop, CSS Animations -> *Pair programming and reading docs*
      * Sheer amount of async code -> *Pair Programming*
      * Data Exchange Between Team members -> *Initial planning document and communication*
    * App Intelligence planning and design (optimizing results from multiple API's -> Uncharted Territory) -> *Communication, pair programming, breaking out helper functions and planning*

