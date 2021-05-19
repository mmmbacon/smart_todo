hippo.
=========
This project was created for the 2021 Lighthouse Labs Web Development Bootcamp. The app uses contextual hinting to do searches of 3 different APIs and return what it thinks is the best result for a todo list item. This allows the user to quickly add items to their list without much thinking and the app will do the work of deciding what category it belongs in. 

## Getting Started

1. Fork and clone the respository.
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`.
3. Update the .env file with your correct local postgres information.
4. Request API keys from Yelp (https://www.yelp.com/fusion), Google Books (https://developers.google.com/books/docs/v1/getting_started), and IMBD (https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial). Add these to your .env file as EATERY_KEY, BOOK_KEY, and MOVIE_KEY, respectively.
5. Install dependencies: `npm i`
6. Fix to binaries for sass: `npm rebuild node-sass`
7. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
8. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
9. Visit `http://localhost:8080/`

## Screenshots

!["Screenshot of adding a new item"](https://github.com/mmmbacon/smart_todo/blob/development/docs/newItemAdded.png)
!["Screenshot of loading animations"](https://github.com/mmmbacon/smart_todo/blob/development/docs/itemSubmission.png)
!["Screenshot of drag and drop"](https://github.com/mmmbacon/smart_todo/blob/development/docs/dragAndDrop.png)
!["Screenshot of edit item dialog"](https://github.com/mmmbacon/smart_todo/blob/development/docs/editItem.png)
!["Screenshot of mobile site"](https://github.com/mmmbacon/smart_todo/blob/development/docs/mobileSite.png)


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Chai 4.3.4 or above
- Mocha 8.3.2 or above
- Nodemon 1.19.4 or above
- Body-parser 1.19.0 or above
- Chalk 2.4.2 or above
- Dotenv 2.0.0 or above
- Ejs 2.6.2 or above
- Express 4.17.1 or above
- Morgan 1.9.1 or above
- Node-sass-middleware 0.11.0 or above
- Yelp-fusion 3.0.0 or above
