const mgpTest = require("./mgp");


test("Test the function from obj is callable", () => {
  expect(mgpTest.generate()).toBe("");
});