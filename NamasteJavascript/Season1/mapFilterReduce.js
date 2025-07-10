// Map
console.log("Map");
const arr = [5, 1, 3, 2, 6];

// Double -> [10, 2, 6, 4, 12]
// Triple -> [15, 3, 9, 6, 18]
// Binary -> ['101', '1', '11', '10', '110']

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

// Passing function directly
console.log("Passing function directly");

console.log(
  arr.map(function (x) {
    return x * 2;
  })
);

console.log(
  arr.map(function (x) {
    return x * 3;
  })
);

console.log(
  arr.map(function (x) {
    return x.toString(2);
  })
);

// Using Arrow functions
console.log("Using Arrow functions");

console.log(
  arr.map((x) => {
    return x * 2;
  })
);

console.log(
  arr.map((x) => {
    return x * 3;
  })
);

console.log(
  arr.map((x) => {
    return x.toString(2);
  })
);

// Using Arrow functions - shorthand
console.log("Using Arrow functions - shorthand");

console.log(arr.map((x) => x * 2));
console.log(arr.map((x) => x * 3));
console.log(arr.map((x) => x.toString(2)));

// Filter
console.log("Filter");

// Filter Odd values
function isOdd(x) {
  return x % 2 !== 0;
}
console.log(arr.filter(isOdd));

// Filter Even values
function isEven(x) {
  return x % 2 === 0;
}
console.log(arr.filter(isEven));

// Greater than 4
function greaterThanFour(x) {
  return x > 4;
}
console.log(arr.filter(greaterThanFour));

// Passing function directly
console.log("Passing function directly");

console.log(
  arr.filter(function (x) {
    return x % 2 !== 0;
  })
);

console.log(
  arr.filter(function (x) {
    return x % 2 === 0;
  })
);

console.log(
  arr.filter(function (x) {
    return x > 4;
  })
);

// Using Arrow functions
console.log("Using Arrow functions");

console.log(
  arr.filter((x) => {
    return x % 2 !== 0;
  })
);

console.log(
  arr.filter((x) => {
    return x % 2 === 0;
  })
);

console.log(
  arr.filter((x) => {
    return x > 4;
  })
);

// Using Arrow functions - shorthand
console.log("Using Arrow functions - shorthand");

console.log(arr.filter((x) => x % 2 !== 0));
console.log(arr.filter((x) => x % 2 === 0));
console.log(arr.filter((x) => x > 4));

// Reduce
console.log("Reduce");

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

function findMin(arr) {
  let min = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findSum(arr));
console.log(findMax(arr));
console.log(findMin(arr));

// Passing function directly
console.log("Passing function directly");

console.log(
  arr.reduce(function (acc, curr) {
    acc += curr;
    return acc;
  }, 0)
);

console.log(
  arr.reduce(function (acc, curr) {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0)
);

console.log(
  arr.reduce(function (acc, curr) {
    if (acc > curr) {
      acc = curr;
    }
    return acc;
  }, arr[arr.length - 1])
);

// Using Arrow functions
console.log("Using Arrow functions");

console.log(
  arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0)
);

console.log(
  arr.reduce((acc, curr) => {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0)
);

console.log(
  arr.reduce((acc, curr) => {
    if (acc > curr) {
      acc = curr;
    }
    return acc;
  }, arr[arr.length - 1])
);

// Using Arrow functions - shorthand
console.log("Using Arrow functions - shorthand");
console.log(arr.reduce((acc, curr) => (acc += curr), 0));

console.log(arr.reduce((acc, curr) => (acc < curr ? (acc = curr) : acc), 0));

console.log(
  arr.reduce(
    (acc, curr) => (acc > curr ? (acc = curr) : acc),
    arr[arr.length - 1]
  )
);

// Complex example

const users = [
  {
    firstName: "Rajesh",
    lastName: "Ranjan",
    designation: "Full Stack Developer",
    age: 29,
  },
  { firstName: "Akshay", lastName: "Saini", designation: "Youtuber", age: 32 },
  {
    firstName: "Sayantanee",
    lastName: "Mohanta",
    designation: "Senior Associate",
    age: 29,
  },
  {
    firstName: "Narendra",
    lastName: "Modi",
    designation: "Prime Minister",
    age: 75,
  },
];

// Passing function directly
console.log("Passing function directly");

console.log(
  users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }

    return acc;
  }, {})
);

console.log(
  users
    .filter(function (user) {
      if (user.age < 30) {
        return user;
      }
    })
    .map(function (user) {
      return user.firstName;
    })
);

// Using Arrow functions
console.log("Using Arrow functions");

console.log(
  users.reduce((acc, curr) => {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }

    return acc;
  }, {})
);

console.log(
  users
    .filter((user) => {
      if (user.age < 30) {
        return user;
      }
    })
    .map(function (user) {
      return user.firstName;
    })
);

// Using Arrow functions - shorthand
console.log("Using Arrow functions - shorthand");

console.log(
  users.reduce((acc, curr) => {
    acc[curr.age] = acc[curr.age] ? acc[curr.age] + 1 : 1;
    return acc;
  }, {})
);

// Using Arrow functions - shorthand and filter, map
console.log("Using Arrow functions - shorthand and filter, map");

console.log(
  users.filter((user) => user.age < 30).map((user) => user.firstName)
);

// Using Arrow functions - shorthand and reduce
console.log("Using Arrow functions - shorthand and reduce");

console.log(
  users.reduce((acc, curr) => {
    curr.age < 30 ? acc.push(curr.firstName) : null;
    return acc;
  }, [])
);

// Using Arrow functions - shorthand and reduce without return
console.log("Using Arrow functions - shorthand and reduce without return");
console.log(
  users.reduce(
    (acc, curr) => (curr.age < 30 ? (acc.push(curr.firstName), acc) : acc),
    []
  )
);
