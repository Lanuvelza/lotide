const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual'); 
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue'); 
const flatten = require('./flatten');
const letterPositions = require('./letterPositions'); 
const map = require('./map'); 
const takeUntil = require('./takeUntil'); 
const without = require('./without');




module.exports = {
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual, 
  head:   head,
  tail:   tail,
  middle: middle,
  without: without, 
  takeUntil: takeUntil, 
  flatten: flatten,
  map: map,
  letterPositions: letterPositions,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual, 
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue  
};