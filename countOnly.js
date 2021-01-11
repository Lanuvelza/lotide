// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
  
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly; 

//Other solution

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   let obj = {};
//   for (const object in itemsToCount) {
//     if (itemsToCount[object]) {
//       let count = 0;
//       for (let i = 0; i < allItems.length; i++) {
//         if (allItems[i] === object) {
//           count += 1;
//           obj[object] = count;
//         }
//       }
//     }
//   }
//   return obj;
// };

