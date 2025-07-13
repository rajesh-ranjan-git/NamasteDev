const arr = [3, 6, 8, 2, 5];

// map
const doubleArr = arr.map((item) => 2 * item);

// console.log(doubleArr);

// Polyfill for map
Array.prototype.myMap = function (callback) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i]));
  }

  return temp;
};

const myDoubleArr = arr.myMap((item) => 2 * item);
// console.log(myDoubleArr);

// reduce
const filteredArr = arr.filter((item) => item > 3);
// console.log(filteredArr);

// Polyfill for filter
Array.prototype.myFilter = function (callback) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// const myFilteredArr = arr.myFilter((item) => item > 3);
// console.log(myFilteredArr);

// reduce
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let temp = initialValue;

  for (let i = 0; i < this.length; i++) {
    temp = callback(temp, this[i]);
  }

  return temp;
};

const mySum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(mySum);
