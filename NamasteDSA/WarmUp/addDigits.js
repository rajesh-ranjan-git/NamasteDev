function addDigits(num) {
  let res = 0;

  while (num > 0) {
    res = res + (num % 10);
    num = Math.floor(num / 10);
  }

  if (res > 10) {
    res = addDigits(res);
  }

  return res;
}

console.log(addDigits(38));
