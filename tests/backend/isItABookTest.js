const chai = require("chai");
chai.should();
const { isItABook } = require("../../routes/helpers");

describe("helpers", function() {
  //happy path
  it("should return Books for Fellowship Of The Ring", (done) => {
    isItABook("The Joy of Cooking")
      .then((res) => {
        res.should.equal("Books");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return Books for How to Tune Your Dulcimer", (done) => {
    isItABook("How to Tune Your Dulcimer")
      .then((res) => {
        res.should.equal("Books");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  //unhappy path
  it("should return false for keysmashad;iudaf;iudd", (done) => {
    isItABook("keysmashad;iudaf;iudd")
      .then((res) => {
        res.should.equal(false);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

it("should return false for Burn After Reading (movie)", (done) => {
  isItABook("Burn After Reading")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

it("should return false for Murchie's (dining)", (done) => {
  isItABook("Murchie's")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});
