const array = [1, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
function twoNumberSum(array, targetSum) {
  const dummyArray = [];
  const dummyObject = {};
  for (let i = 0; i < array.length; i++) {
    let complement = targetSum - array[i];
    if (dummyObject[complement]) {
      dummyArray.push(array[i]);
      dummyArray.push(complement);
      return dummyArray;
    }
    dummyObject[array[i]] = true;
  }

  return dummyArray;
}

console.log(twoNumberSum(array, targetSum));
