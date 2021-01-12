const assert = require('chai').assert; 
const flatten = require('../flatten');


// Test cases for flatten; 
describe("#flatten", () => {

  it("returns [1, 2] for [1, 2, []]", () => {
    assert.deepEqual(flatten([1, 2, []]), [1, 2]);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });
  
});