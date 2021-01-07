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

const eqObjects = function(object1, object2) {
  let boolean = true; 
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    boolean = false;
  }
  
  for (let key of key1) {
      if(!key2.includes(key)){
        boolean = false; 
      }else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        boolean = eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        boolean = false;
      }
    }
  return boolean;
};

let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual,expected)) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

const obj1 = {
  a: 1,
  b: 2
}

const obj2 = {
  b: 2,
  a: 1
}

const obj3 = {
  b: 1,
  a: 1
}

const obj4 = {
  a: 1,
  c: 2
}

assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);
assertObjectsEqual(obj1,obj4);