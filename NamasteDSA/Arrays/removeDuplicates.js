function removeDuplicates(array) {
  let numberOfUniqueElements = 0;

  for (let index = 1; index < array.length; index++) {
    if (array[index] > array[numberOfUniqueElements]) {
      numberOfUniqueElements++;
      array[numberOfUniqueElements] = array[index];
    }
  }

  return numberOfUniqueElements + 1;
}

console.log(removeDuplicates([0, 0, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 9, 9]));
