function reverseNumber(num) {
  if (num === 0) return num;

  const copyNum = num;
  num = Math.abs(num);

  if (num < 10) return copyNum < 0 ? -num : num;

  let reversedNumber = 0;

  while (num > 0) {
    reversedNumber = reversedNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return copyNum < 0 ? -reversedNumber : reversedNumber;
}

console.log(reverseNumber(4564532));
