let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(string) {
  let obj = {};
  let str = string.toLowerCase().split(" ").join('');
  //console.log(str);
  for (let substring of str) {
    //console.log(substring);
    if (obj[substring]) {
      obj[substring] += 1;
    } else {
      obj[substring] = 1;
    }
  }
  return obj;
};

const result1 = countLetters("Lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["x"], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1["4"], undefined);
