const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual; 

