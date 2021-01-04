const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F7E2) + String.fromCodePoint(0x1F7E2) + String.fromCodePoint(0x1F7E2) + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(String.fromCodePoint(0x1F534) + String.fromCodePoint(0x1F534) + String.fromCodePoint(0x1F534) + " Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("hello", "hello");
assertEqual(1,2);

