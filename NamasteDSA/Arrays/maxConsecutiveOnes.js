function maxConsecutiveOnes(array) {
  let counter = 0;
  let maxCounter = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === 1) {
      counter++;
    } else {
      counter = 0;
    }

    maxCounter = counter > maxCounter ? counter : maxCounter;
  }

  return maxCounter;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
