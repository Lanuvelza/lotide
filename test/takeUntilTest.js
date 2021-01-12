const assert = require('chai').assert; 
const takeUntil = require('../takeUntil');


// Test cases for takeUntil
describe("#takeUntil", () => {

  it("returns [1, 2, 5, 7, 2] when passing x => x < 0 for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] when passing x => x === ',' for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
  });
  
});