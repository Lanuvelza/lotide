const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code for tail
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


// Tests to see the original array is unchanged
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);