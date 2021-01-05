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

const without = function(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);