function countDigits(num) {
  if (num === 0) return 1;

  num = Math.abs(num);
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

const num = -4561;

console.log(`Num: ${num} has ${countDigits(num)} digits.`);
