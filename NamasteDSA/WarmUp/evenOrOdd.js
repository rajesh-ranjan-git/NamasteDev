const evenOrOdd = (x) => {
  if (!Number(x)) {
    console.log(`${x} is an invalid number, please try again.`);
  } else if (x % 2 === 0) {
    console.log(`${x} is an even number.`);
  } else {
    console.log(`${x} is an odd number.`);
  }
};

evenOrOdd(3);
