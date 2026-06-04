console.log(false == "0"); // true

console.log([] == ![]); // true

console.log(typeof NaN); // number

console.log(0.1 + 0.2 === 0.3); // true

let a = [1, 2];

let b = a;

b.push(3);

console.log(a); // [1, 2, 3]

// Which method creates a new array? B. map

// SELECT COUNT(*) FROM employees

// == only compares value, but === compares value along with its type


function findMax(arr) {
    return Math.max(...arr)
}

findMax([10, 20, 5, 50, 25])

