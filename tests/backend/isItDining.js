const chai = require("chai");
const { isItAnEatery } = require("../../routes/helpers");

describe("helpers", function () {
  //happy path
  it("if you are in Victoria, should return Dining for murchie's", () => {
    chai.assertEqual(isItAnEatery("murchie's"), "Dining");
  });

  it("if you are in Victoria, should return Dining for the keg", () => {
    chai.assertEqual(isItAnEatery("the keg"), "Dining");
  });

  //sad path
  it("if you are in Victoria, should return false for keysmashad;iudaf;iudd", () => {
    chai.assertEqual(isItAnEatery("keysmashad;iudaf;iudd"), false);
  });

  it("if you are in Victoria, should return false for do not say we have nothing (book)", () => {
    chai.assertEqual(isItAnEatery("do not say we have nothing"), false);
  });
  it("if you are in Victoria, should return false for burn after reading (movie)", () => {
    chai.assertEqual(isItAnEatery("burn after reading"), false);
  });
});
