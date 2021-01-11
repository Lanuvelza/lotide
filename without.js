const without = function(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

module.exports = without; 