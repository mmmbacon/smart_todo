const { isItAMovie, isItABook, isItDining } = require('./helpers.js');

//Call apis in this order: book then dining then movie
const bdmOrder = function (userEntry) {
    console.log('order: book then dining then movie')
    isItABook(userEntry)
      .then(result => {
        if (result === 2) {
          // console.log(`It is a book`)
          return result;
        }
        return isItDining(userEntry)
          .then(result => {
            if (result === 3) {
              // console.log(`It is an dining`)
              return result;
            }
            return isItAMovie(userEntry)
              .then(result => {
                if (result === 1) {
                  // console.log(`It is a movie`)
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });

  }

//Call apis in this order: book then movie then dining
const bmdOrder = function (userEntry) {

    console.log('order: book then movie then dining')
    isItABook(userEntry)
      .then(result => {
        if (result === 2) {
          // console.log(`It is a book`)
          return result;
        }
        return isItAMovie(userEntry)
          .then(result => {
            if (result === 1) {
              // console.log(`It is a movie`)
              return result;
            }
            return isItDining(userEntry)
              .then(result => {
                if (result === 3) {
                  // console.log(`It is an dining`)
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });

  }


//Call apis in this order: movie then book then dining
const mbdOrder = function (userEntry) {

    console.log('order: movie then book then dining')
    isItAMovie(userEntry)
      .then(result => {
        if (result === 1) {
          return result;
        }
        return isItABook(userEntry)
          .then(result => {
            console.log("result of book check:", result)
            if (result === 2) {
              console.log('in book check result:', result)
              return result;
            }
            return isItDining(userEntry)
              .then(result => {
                console.log("result of dining check:", result)
                if (result === 3) {
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        console.log('categorycode', categoryCode);
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });

  }


//Call apis in this order: movie then dining then book
const mdbOrder = function (userEntry) {

    console.log('order: movie then dining then book')
    isItAMovie(userEntry)
      .then(result => {
        if (result === 1) {
          // console.log(`It is a movie`)
          return result;
        }
        return isItDining(userEntry)
          .then(result => {
            if (result === 3) {
              // console.log(`It is an dining`)
              return result;
            }
            return isItABook(userEntry)
              .then(result => {
                if (result === 2) {
                  // console.log(`It is a book`)
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });

  }


//Call apis in this order: dining then book then movie
const dbmOrder = function (userEntry) {

    console.log('order: dining then book then movie')
    isItDining(userEntry)
      .then(result => {
        if (result === 3) {
          // console.log(`It is an dining`)
          return result;
        }
        return isItABook(userEntry)
          .then(result => {
            if (result === 2) {
              // console.log(`It is a book`)
              return result;
            }
            return isItAMovie(userEntry)
              .then(result => {
                if (result === 1) {
                  // console.log(`It is a movie`)
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      });
  }


//Call apis in this order: dining then movie then book
const dmbOrder = function (userEntry) {

    console.log('order: dining then movie then book')
    isItDining(userEntry)
      .then(result => {
        if (result === 3) {
          // console.log(`It is an dining`)
          return result;
        }
        return isItAMovie(userEntry)
          .then(result => {
            if (result === 1) {
              // console.log(`It is a movie`)
              return result;
            }
            return isItABook(userEntry)
              .then(result => {
                if (result === 2) {
                  // console.log(`It is a book`)
                  return result;
                }
                return 4;
              })
          })
      })
      .then(categoryCode => {
        createItem(req.params.userid, categoryCode, userEntry, priority)
          .then(items => {
            res.json({ items })
          })
          .catch(error => {
            console.log(error);
            res
              .status(500)
              .json({ error: error.message })
          });
        return;
      })
  }


module.exports = {bdmOrder, bmdOrder, mbdOrder, mdbOrder, dbmOrder, dmbOrder}
