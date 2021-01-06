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


const middle = function(arr) {
  let newArr = [];
  if (arr.length >= 3 && arr.length % 2 === 0) {
    newArr.push(arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]);
  } else if (arr.length >= 3 && arr.length % 2 === 1) {
    newArr.push(arr[Math.ceil(arr.length / 2) - 1]);
  }
  return newArr;
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

