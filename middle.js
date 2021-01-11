 const middle = function(arr) {
  let newArr = [];
  if (arr.length >= 3 && arr.length % 2 === 0) {
    newArr.push(arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]);
  } else if (arr.length >= 3 && arr.length % 2 === 1) {
    newArr.push(arr[Math.ceil(arr.length / 2) - 1]);
  }
  return newArr;
};

module.exports = middle; 



     