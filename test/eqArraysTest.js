const assert = require('chai').assert; 
const eqArrays = require('../eqArrays');



// Test cases for eqArrays 
describe("#eqArrays", () => {

  it("returns true for comparing [1, 2, 3] with [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for comparing [1, 2, 3] with [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for comparing [1, 2, 3] with [1, 2]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns true for comparing ['1', '2', '3'] with ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for comparing ['1', '2', '3'] with ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true for comparing [] with []", () => {
    assert.strictEqual(eqArrays([],[]), true);
  }); 

  it("returns false for comparing [[2, 3], [4]] with [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns true for comparing [[2, 3], [4]] with [[2, 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2,3],[4]], [[2,3], [4]]), true);
  });

  it("returns false for comparing [[2, 3], [4]] with [[2, 3], 4]", () => {
    assert.strictEqual(eqArrays([[2,3],[4]], [[2,3], 4]), false);
  });

});