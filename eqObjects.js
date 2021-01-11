const eqArrays = require('./eqArrays');

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

module.exports = eqObjects; 


