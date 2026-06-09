function singleNumber(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]]) {
      hash[array[i]]++;
    } else {
      hash[array[i]] = 1;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]] === 1) {
      return array[i];
    }
  }
}

function singleNumberXOR(array) {
  let xor = 0;

  for (let i = 0; i < array.length; i++) {
    xor = xor ^ array[i];
  }

  return xor;
}

console.log(singleNumberXOR([2, 2, 1]));
console.log(singleNumberXOR([4, 1, 2, 1, 2]));
