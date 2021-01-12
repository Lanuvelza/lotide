const assert = require('chai').assert; 
const findKeyByValue = require('../findKeyByValue');

// Test cases for findKeyByValue
describe("#findKeysByValue", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns 'drama' when given the key 'The Wire' in the bestTVShowsByGenre = {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when given the key 'That '70s Show' in the bestTVShowsByGenre = {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});