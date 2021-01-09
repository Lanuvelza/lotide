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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let boolean = true; 
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    boolean = false;
  }
  
  for (let key of key1) {
      if(object1[key] instanceof Object && object2[key] instanceof Object){
        boolean = eqObjects(object1[key], object2[key]);
      } else if(!(key2.includes(key))){
        boolean = false; 
      }else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        boolean = eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        boolean = false;
      }
    }

  return boolean;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const fg = { f: "1", g: "2" };
const gf = { f: "2", g: "2" };
assertEqual(eqObjects(fg, gf), false); // => false

assertEqual(eqObjects(ab,fg), false);

// if the keys are the same (not just the length)
// check if the value of one key is different even though its the same key as the other 

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) , true); 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { z: [4, 5, 6] }, b: 2 }, { a: { z: 1 }, b: 2 }) , false); 
assertEqual(eqObjects({ a: { z: [4, 5, 6] }, b: 2 }, { a: [2, 3]}) , false); 


