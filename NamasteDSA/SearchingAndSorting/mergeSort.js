function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }

  return [...merged, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([3, 1, 6, 84, 7, 34, 5, 2]));
console.log(mergeSort([5, 4, 9, 15, 7, 1, 0]));
