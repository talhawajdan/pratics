const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

function inValid(array, sequence) {
  // Write your code here.
  if (sequence.length > array.length) {
    return false;
  }
  let idx = 0;
  for (const value of array) {
    if (idx === sequence.length) {
      return true;
    }
    if (sequence[idx] === value) {
      idx++;
    }
  }
  return idx === sequence.length;
}

console.log(inValid(array, sequence));
