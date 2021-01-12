const assert = require('chai').assert; 
const countOnly = require('../countOnly');

// Test cases for countOnly
describe("#countLetters", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ]; 

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("returns 1 for the key 'Jason' in counting the names of 'firstNames' if the key is true", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns 2 for the key 'Fang' in counting the names of 'firstNames' if the key is true", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined for the key 'Karima' in counting the names of firstNames if the key is false", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns undefined for the key 'Joe' in counting the names of firstNames if the key does not exist but appears in firstNames", () => {
    assert.strictEqual(result["Joe"], undefined);
  });

});