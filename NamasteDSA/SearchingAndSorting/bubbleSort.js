function bubbleSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return array;
}

console.log(bubbleSort([3, 1, 6, 84, 7, 34, 5, 2]));
console.log(bubbleSort([5, 4, 9, 15, 7, 1, 0]));
