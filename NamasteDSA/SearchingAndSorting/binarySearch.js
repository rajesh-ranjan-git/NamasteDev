function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 6, 7, 9, 15], 9));
