const printEvenNumbers = (arr) => {
  arr.forEach((element) => {
    element % 2 === 0 ? console.log(`${element} is even`) : null;
  });
};

const arr = [3, 56, 25, 7, 34, 7, 9, 3, 5, 8, 3, 5];

printEvenNumbers(arr);
