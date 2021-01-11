const findKeyByValue = function(obj, val) {
  // let keypairs = Object.entries(obj);
  // for(let i = 0; i < keypairs.length; i++){
  //   if(keypairs[i][1] === val){
  //     return keypairs[i][0];
  //   }
  // }
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === val) {
      return key;
    } 
  }
};

module.exports = findKeyByValue;