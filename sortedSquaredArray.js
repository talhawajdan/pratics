const array = [-5, -4, -3, -2, -1];

// function sortedSquaredArray(array) {
//   const squaredArray = [];
//   for (const key of array) {
//     squaredArray.push(key * key);
//   }
//   squaredArray.sort((a, b) => a - b);
//   return squaredArray;
// }

function sortedSquaredArray(array) {
  let sortedArray = new Array(array.length).fill(0);
  let smallValueArrayIndex = 0;
  let largerValueArrayIndex = array.length - 1;
  const arraykeys = Object.keys(array).reverse();
  for (const key of arraykeys) {
    let smallvalue = array[smallValueArrayIndex];
    let largervalue = array[largerValueArrayIndex];
    if (Math.abs(smallvalue) > Math.abs(largervalue)) {
      sortedArray[key] = smallvalue * smallvalue;
      smallValueArrayIndex += 1;
    } else {
      sortedArray[key] = largervalue * largervalue;
      largerValueArrayIndex -= 1;
    }
  }

  return sortedArray;
}

console.log(sortedSquaredArray(array));
/***
 * this is brute force approach
 * 2nd one is the optimal approch
 *
 */
