function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort([3, 1, 6, 84, 7, 34, 5, 2]));
console.log(selectionSort([5, 4, 9, 15, 7, 1, 0]));
