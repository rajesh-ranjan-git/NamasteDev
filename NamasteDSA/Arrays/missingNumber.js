function missingNumber(array) {
  let total = Math.floor((array.length * (array.length + 1)) / 2);
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
  }

  return total - sum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
