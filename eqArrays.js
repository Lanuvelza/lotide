let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let boolean = false;
  if (arr1.length === arr2.length) {
    boolean = true;
    for (let i = 0; i < arr1.length; i++) {
      if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        boolean = eqArrays(arr1[i],arr2[i]); 
      } else if (arr1[i] === arr2[i]) {
        boolean = true;
      } else {
        return false;
      }
    }
  }
  return boolean;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[2,3],[4]], [[2,3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
