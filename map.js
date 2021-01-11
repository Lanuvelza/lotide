const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

