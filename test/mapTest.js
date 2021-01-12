const assert = require('chai').assert; 
const map = require('../map');

//Test Cases for map
describe("#map", () => {

  it("returns ['g', 'c', 't', 'm', 't'] when mapping the array with element => element[0] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("returns [6, 7, 2, 5, 3] when mapping the array with element => element.length for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results2 = map(words, word => word.length);
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
  });

  it("returns ['groundy', 'controly', 'toy', 'majory', 'tomy'] when mapping the array with element => element + 'y' for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results3 = map(words, word => word + 'y');
    assert.deepEqual(results3, ["groundy", "controly", "toy", "majory", "tomy"]);
  });


  it("returns [1, 2, 3, 4, 5] when mapping the array with element => element / 10 for [10, 20, 30, 40, 50]", () => {
    const numbers = [10, 20, 30, 40, 50];
    const results4 = map(numbers, num => num / 10);
    assert.deepEqual(results4, [1, 2, 3, 4, 5]);
  });

  it("returns [] when mapping the array with element => element[0] for []", () => {
    const empty = []; 
    const results5 = map(empty, word => word[0]);
    assert.deepEqual(results5, []);
  });
  
});