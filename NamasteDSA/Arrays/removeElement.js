function removeElement(array, val) {
  let currentPosition = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== val) {
      array[currentPosition] = array[index];
      currentPosition++;
    }
  }

  return currentPosition;
}

console.log(removeElement([3, 2, 2, 3], 3));
