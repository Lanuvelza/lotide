const countLetters = function(string) {
  let obj = {};
  let str = string.toLowerCase().split(" ").join('');
  //console.log(str);
  for (let substring of str) {
    //console.log(substring);
    if (obj[substring]) {
      obj[substring] += 1;
    } else {
      obj[substring] = 1;
    }
  }
  return obj;
};

module.exports = countLetters; 

