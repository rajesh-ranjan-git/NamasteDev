function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([3, 1, 6, 84, 7, 34, 5], 6));
