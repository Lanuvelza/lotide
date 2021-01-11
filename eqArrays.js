
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

module.exports = eqArrays; 

