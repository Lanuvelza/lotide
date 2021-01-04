let correct = String.fromCodePoint(0x1F7E2);
let wrong = String.fromCodePoint(0x1F534);

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`${correct}${correct}${correct} Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`${wrong}${wrong}${wrong} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([1,2,3,4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);

result = tail([1]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);