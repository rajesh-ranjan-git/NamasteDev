function moveZeroes(array) {
  let pos = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] !== 0) {
      array[pos] = array[index];
      pos++;
    }
  }

  for (let index = pos; index < array.length; index++) {
    array[index] = 0;
  }

  return array;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
