const assert = require('chai').assert; 
const without = require('../without');

// Test cases for withoutS 
describe("#without", () => {

  it("returns [2, 3] from removing [1] from  [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] from removing [1, 2, '3'] from ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [1, 2, 3] from removing [] from [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });

  it("checks to make sure the original array remains unchanged", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  
});