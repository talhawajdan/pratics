const array = [1, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
function twoNumberSum(array, targetSum) {
  const dummyArray = [];
  for (let i = 0; i < array.length; i++) {
    let value1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let value2 = array[j];

      if (value1 + value2 === targetSum) {
        dummyArray.push(value1);
        dummyArray.push(value2);
      }
    }
  }

  return dummyArray;
}

console.log(twoNumberSum(array, targetSum));
