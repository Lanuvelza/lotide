const assert = require('chai').assert; 
const letterPositions = require('../letterPositions');

// Test cases for letterPositions
describe("#letterPositions", () => {

  it("returns [1] for the string 'e' in 'hello'", () => {
    const result1 = letterPositions("hello");
    assert.deepEqual(result1.e, [1]);
  });

  it("returns [2,3] for the string 'l' in 'hello'", () => {
    const result2 = letterPositions("hello");
    assert.deepEqual(result2.l, [2, 3]);
  });

  it("returns [3, 5, 15, 18] for the string 'h' in 'lighthouse in the house'", () => {
    const result3 = letterPositions("lighthouse in the house");
    assert.deepEqual(result3.h, [3, 5, 15, 18]);
  });

  it("returns [8, 21] for the string 's' in 'lighthouse in the house'", () => {
    const result4 = letterPositions("lighthouse in the house");
    assert.deepEqual(result4.s, [8, 21]);
  });

});