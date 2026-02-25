const findSmallestNumber = (arr) => {
  return arr.reduce((acc, curr) => (curr < acc ? curr : acc), Infinity);
};

const arr = [3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5];

console.log(`${findSmallestNumber(arr)} is the smallest number.`);
