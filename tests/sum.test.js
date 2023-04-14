///////////////////////
// Import Dependencies
///////////////////////
// do not use `import` statements in vanilla JS
// import sum from "../functions/sum"
const sum = require("../functions/sum")

//////////////////////
// Test
//////////////////////

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
})