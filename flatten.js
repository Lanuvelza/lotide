const flatten = function(arr) {
  let newArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = flatten; 
