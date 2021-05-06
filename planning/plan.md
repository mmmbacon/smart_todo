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

0:30 - 3:30: User Perspective

  BM - Hold up, technical difficulties...

  Awkard silence.

  B - Wellllll, while we're waiting for Brandon, Lily, have you seen that new movie on Netflix called Mitchell's versus the Machines?

  L - No, Brianna, I haven't, but that sounds SUPER interesting. Let me just write this down with my trusty old pen and paper.

  B - What?! You're still using pen and paper? It's 2021.

  L - Well what do you use? 

  B - I am SO glad you asked. I just found this new app called Hippo. It's a super smart todo list that'll automatically sort tasks into categories. 

  BM - Screenshare

  L - I don't believe it. 

  B - Let me show you how it works. All I need to do is type in the name of something I want to watch, read, eat or buy, and the app will automatically categorize the item. For example, if I type in Mitchell's vs the Machines and hit the add new item button... The app will automatically figure out what category the item belongs in and add it.

  BM - Type out and submit entry WATCH Mitchell's vs the Machines. 
  
    (correct) Wait for the API to return. - "Wow! look at that dancing hippo." Only Lily gets to talk about the dancing hippo

  L - You put the word watch there, that seems like cheating, so...

  B - Here, I'll put in a restaraunt this time. How about Red Lobster?

  BM - Type out and submit entry Red Lobster. 

  B -  There, it still works.

    (correct) Wait for the API to return. - "Wow! look at that dancing hippo." Only Lily will talk about the dancing hippo

  L - Hey I noticed a typo in one of your existing items. Can you edit items?

  B - No problem. That's an easy fix. I just click the little edit icon and change the name... While I'm in here I can also change the completed status if I like... or I can change the category. For example, maybe I want to buy Aladdin. (On VHS, if I'm you and still living in the stone age).... 

  BM - Edit the alladin description, category, and completion status. Save the item. 

  L - Hey I seen a deletion option in the edit window. 

  B - Yes. Let's say I heard that Alladin was terrible and change my mind about buying it. I can take it off my list....Now that I'm not watching Aladdin, I have a hole in my Friday. Maybe I'll check out Hitchhikers Guide to the Galaxy'.

  BM - Delete Alladin item.

  L - What if I wanted to read the book first?

  B - You can edit it through the edit dialog that I showed you earlier, or just grab the item and drag it into a new category.

  BM - Move hitchhikers guide into books.

  B - Another shortcut is to mark items as completed by clicking the checkbox to the left of the item.
  
  L - Can I use this app on my phone? Sometimes I get recommendations while I'm on the go.

  B - Not a problem. The app is fully responsive.

  L - Wow! That is so incredible. I won't be needing my pen and paper anymore (throws book). Welcome to 2021. I wonder who the geniuses are behind this marvellous creation?


3:30 - 5:00: Why we chose this project, Roles, and challenges

  Well let me tell you. Brianna, Lily and I developed this single page application because we wanted an opportunity to work with multiple APIs and challenge our existing knowledge. We split the core work vertically. Brianna was responsible for REST API, Lily worked on Front-End, and I developed the database. Planning, stretch work and styling was accomplished together in group sessions.
  
  Some challenges we faced as a team were branching and merging with GIT, working with individual technology implementations and how to make the app "smart". We were able to solve these challenges by using effective planning, peer programming, communication and researching library documentation. 

  If you're wondering why we called the app hippo. The hippocampus is one of the parts of the brain associated with memory, and also because hippos are super cool. 

  Thank you for your attention.




  * GIT workflow
      * Branching, Merge conflicts -> *Communication, planning workflow, practice and reading docs*
    * Technology challenges (Learning new libraries and features)
      * Drag and Drop, CSS Animations -> *Pair programming and reading docs*
      * Sheer amount of async code -> *Pair Programming*
      * Data Exchange Between Team members -> *Initial planning document and communication*
    * App Intelligence planning and design (optimizing results from multiple API's -> Uncharted Territory) -> *Communication, pair programming, breaking out helper functions and planning*

