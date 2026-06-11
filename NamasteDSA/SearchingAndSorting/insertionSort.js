function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let previous = i - 1;

    while (previous >= 0 && array[previous] > current) {
      array[previous + 1] = array[previous];
      previous--;
    }

    array[previous + 1] = current;
  }

  return array;
}

console.log(insertionSort([3, 1, 6, 84, 7, 34, 5, 2]));
console.log(insertionSort([5, 4, 9, 15, 7, 1, 0]));
