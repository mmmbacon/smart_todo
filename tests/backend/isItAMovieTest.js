const chai = require("chai");
chai.should();
const { isItAMovie } = require("../../routes/helpers");

describe("helpers", function () {
  //happy path
  it("should return Movies for Fellowship Of The Ring", () => {
    return isItAMovie("Fellowship Of The Ring")
      .then((res) => {
        res.should.equal("Movies");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should return Movies for Amelie", () => {
    return isItAMovie("Amelie")
      .then((res) => {
        res.should.equal("Movies");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  //unhappy path
  it("should return false for keysmashad;iudaf;iudd", () => {
    return isItAMovie("keysmashad;iudaf;iudd")
      .then((res) => {
        res.should.equal(false);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

it("should return false for Do Not Say We Have Nothing (book)", () => {
  return isItAMovie("Do Not Say We Have Nothing")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

it("should return false for Murchie's (dining)", () => {
  return isItAMovie("Murchie's")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});
