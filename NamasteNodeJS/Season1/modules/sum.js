// export var x = "Hello World";
var x = "Hello World";

// Common JS pattern
function calculateSum(a, b) {
  console.log(a + b);
}

// ES pattern export
// export function calculateSum(a, b) {
//   console.log(a + b);
// }

// console.log(module.exports); // By default an empty object {}
// module.exports = calculateSum;

// Common JS export
// module.exports = {
//   x: x,
//   calculateSum: calculateSum,
// };

// Both these approaches are fine because module.exports is by default an empty object {} and we can associate variables and functions to objects
module.exports.x = x;
module.exports.calculateSum = calculateSum;
