let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

module.exports = assertEqual;