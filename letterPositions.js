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

const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.toLowerCase();
  // logic to update results here
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

const result1 = letterPositions("hello");
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2,3]);

const result2 = letterPositions("lighthouse in the house");
assertArraysEqual(result2.h, [3, 5, 15, 18]); 
assertArraysEqual(result2.s, [8, 21]);
