const assert = require('chai').assert; 
const countLetters = require('../countLetters');

// Test code for head.js
describe("#countLetters", () => {

  const result = countLetters("Lighthouse in the house"); 

  it("returns 1 for the string 'l' in counting the letters of 'Lighthouse in the house'", () => {
    assert.strictEqual(result["l"], 1);
  });

  it("returns undefined for the string 'x' in counting the letters of 'Lighthouse in the house'", () => {
    assert.strictEqual(result["x"], undefined);
  });

  it("returns 4 for the string 'h' in counting the letters of 'Lighthouse in the house'", () => {
    assert.strictEqual(result["h"], 4);
  });

  it("returns undefined for the string '4' in counting the letters of 'Lighthouse in the house'", () => {
    assert.strictEqual(result["4"], undefined);
  });

});