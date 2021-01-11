const assertObjectsEqual = require('../assertObjectsEqual');

// Test cases for assertObjectsEqualTest

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  b: 2,
  a: 1
};

const obj3 = {
  b: 1,
  a: 1
};

const obj4 = {
  a: 1,
  c: 2
};

assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);
assertObjectsEqual(obj1,obj4);

