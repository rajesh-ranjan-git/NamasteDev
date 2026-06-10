n = 10;

function OneToN(x) {
  if (x > n) return;

  console.log(x);
  OneToN(++x);
}

OneToN(1);
