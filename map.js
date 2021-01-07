const eqArrays = function(arr1, arr2) {
  let boolean = false;
  if (arr1.length === arr2.length) {
    boolean = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        boolean = true;
      } else {
        return false;
      }
    }
  }
  return boolean;
};

let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);


const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};


const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [10, 20, 30, 40, 50];
const empty = []; 

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);

const results3 = map(words, word => word + 'y');
console.log(results3);

const results4 = map(numbers, num => num / 10);
console.log(results4);

const results5 = map(empty, word => word[0]);
console.log(results5);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["groundy", "controly", "toy", "majory", "tomy"]);
assertArraysEqual(results4, [1, 2, 3, 4, 5]);
assertArraysEqual(results5, []);
