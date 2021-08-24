const mgpTest = require("./mgp");



test("Test the function from obj is a String ", () => {
  const value = mgpTest.generate();
  expect(typeof value).toBe('string');  
});


test("Print random date ", () => {
  console.log(mgpTest.randomDate(new Date(2012, 0, 1), new Date()));
  //expect(typeof value).toBe('string');  
});