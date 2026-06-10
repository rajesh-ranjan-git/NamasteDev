function powerOfTwo(n) {
  if (n === 1) return true;

  if (n === 0 || n % 2 !== 0) return false;

  return powerOfTwo(Math.floor(n / 2));
}

console.log(powerOfTwo(0));
