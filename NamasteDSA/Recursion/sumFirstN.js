function sumFirstN(n) {
  if (n === 1) return 1;

  return n + sumFirstN(n - 1);
}

console.log(sumFirstN(5));
