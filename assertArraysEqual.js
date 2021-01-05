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



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([], []);

