console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout

console.log(typeof null); // object

// Which hook is primarily used to perform side effects such as API calls? -> useEffect

// What is the main purpose of the key prop when rendering lists? -> Help React identify changed items efficiently

// SELECT department, COUNT(*) FROM employees GROUP BY department;


// Which statement is TRUE? B. Node.js uses a non-blocking event-driven architecture.

let a = 10;

function test() {
  console.log(a);
  let a = 20;
}

test(); // ReferenceError

// JWT consists of which three parts? A. Header, Payload, Signature

function sum(arr) {
    return arr.reduce((curr, acc) => acc + curr, 0)
}

sum([1,2,3,4])

// useMemo() -> It caches value
// useCallback() -> It caches functions