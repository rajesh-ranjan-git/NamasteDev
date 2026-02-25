const countNegativeNumbers = (arr) => {
  return arr.reduce((acc, curr) => (curr < 0 ? ++acc : acc), 0);
};

const arr = [3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5];

console.log(`Found ${countNegativeNumbers(arr)} negative numbers.`);
