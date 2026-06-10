let arr = [5, 3, 2, 0, 1];

function sumArray(n) {
  if (n <= 0) return arr[n];

  return arr[n] + sumArray(n - 1);
}

console.log(sumArray(arr.length - 1));
