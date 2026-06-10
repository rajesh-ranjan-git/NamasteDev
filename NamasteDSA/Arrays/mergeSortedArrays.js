function mergeSortedArrays(array1, m, array2, n) {
  let p1 = 0;
  let p2 = 0;
  let array1Copy = array1.slice(0, m);

  for (let index = 0; index < m + n; index++) {
    if (p2 >= n || (p1 < m && array1Copy[p1] < array2[p2])) {
      array1[index] = array1Copy[p1];
      p1++;
    } else {
      array1[index] = array2[p2];
      p2++;
    }
  }

  return array1;
}

function mergeSortedArrays2(array1, m, array2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let index = m + n - 1; index >= 0; index--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && array1[p1] > array2[p2]) {
      array1[index] = array1[p1];
      p1--;
    } else {
      array1[index] = array2[p2];
      p2--;
    }
  }

  return array1;
}

console.log(mergeSortedArrays2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArrays2([1], 1, [], 0));
console.log(mergeSortedArrays2([0], 0, [1], 1));
console.log(mergeSortedArrays2([1, 2, 0, 0, 0], 2, [2, 5, 6], 3));
