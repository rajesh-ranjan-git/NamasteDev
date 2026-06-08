function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = "* " + row;
    }
    console.log(row);
  }
}

function firstTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = "* " + row;
    }
    console.log(row);
  }
}

function secondTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}

function thirdTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
}

function fourthTrianglePattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }

  console.log();

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}

function fifthTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

function sixthTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + "  ";
    }
    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

console.log("Square Pattern");
squarePattern(4);
console.log("First Triangle Pattern");
firstTrianglePattern(4);
console.log("Second Triangle Pattern");
secondTrianglePattern(5);
console.log("Third Triangle Pattern");
thirdTrianglePattern(5);
console.log("Fourth Triangle Pattern");
fourthTrianglePattern(5);
console.log("Fifth Triangle Pattern");
fifthTrianglePattern(5);
console.log("Sixth Triangle Pattern");
sixthTrianglePattern(5);
