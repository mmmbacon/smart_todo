const chai = require("chai");
chai.should();
const { isItDining } = require("../../routes/helpers");

describe("helpers", function () {
  //happy path
  it("If tester in Victoria, should return Dining for Murchie's", () => {
    return isItDining("Murchie's")
      .then((res) => {
        res.should.equal("Dining");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("If tester in Victoria, should return Dining for Cake Etc", () => {
    return isItDining("Cake Etc")
      .then((res) => {
        res.should.equal("Dining");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  //unhappy path
  it("If tester in Victoria, should return false for keysmashad;iudaf;iudd", () => {
    return isItDining("keysmashad;iudaf;iudd")
      .then((res) => {
        res.should.equal(false);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

it("If tester in Victoria, should return false for Do Not Say We Have Nothing (book)", () => {
  return isItDining("Do Not Say We Have Nothing")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});

it("If tester in Victoria, should return false for Jaws (dining)", () => {
  return isItDining("Jaws")
    .then((res) => {
      res.should.equal(false);
      done();
    })
    .catch((err) => {
      done(err);
    });
});
