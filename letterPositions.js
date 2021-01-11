const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.toLowerCase();
  // logic to update results here
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;