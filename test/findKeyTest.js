const assert = require('chai').assert; 
const findKey = require('../findKey');

// Test cases for findKey 
describe("#findKey", () => {

  it("returns 'noma' when given the callback function x => x.stars === 2 for the object { { 'Blue Hill': { stars: 1}, 'Akaleri': { stars: 3}, 'noma': { stars: 2}, 'elBulli': { stars: 3}, 'Ora': { stars: 2 }, 'Akalarre': { stars: 3}}", () => {
    const result1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"
    assert.strictEqual(result1, "noma");
  });

  it("returns undefined when given the callback function x => x.stars === 4 for the object { { 'Blue Hill': { stars: 1}, 'Akaleri': { stars: 3}, 'noma': { stars: 2}, 'elBulli': { stars: 3}, 'Ora': { stars: 2 }, 'Akalarre': { stars: 3}}", () => {
    const result2 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4); // => undefined
    assert.strictEqual(result2, undefined);
  });

  it("returns 'Akaleri' when given the callback function x => x.stars === 3 for the object { { 'Blue Hill': { stars: 1}, 'Akaleri': { stars: 3}, 'noma': { stars: 2}, 'elBulli': { stars: 3}, 'Ora': { stars: 2 }, 'Akalarre': { stars: 3}}", () => {
    const result3 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3); // => "noma"
    assert.strictEqual(result3, "Akaleri");
  });

});