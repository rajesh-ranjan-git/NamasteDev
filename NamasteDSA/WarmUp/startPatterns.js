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
    for (let j = 0; j < n; j++) {
      row = row * (n - (i + 1)) + "*" * (i + 1);
    }
    console.log(row);
  }
}

squarePattern(4);
console.log();
firstTrianglePattern(4);
console.log();
secondTrianglePattern(5);
console.log();
thirdTrianglePattern(5);
console.log();
fourthTrianglePattern(5);
console.log();
fifthTrianglePattern(5);
console.log();
sixthTrianglePattern(5);
