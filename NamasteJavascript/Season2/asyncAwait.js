// What is async ?
// What is await ?
// How async await works behind the scene ?
// Examples of using async/await ?
// Error Handling
// Interviews
// Async/await vs Promise.then/.catch

// Old way (with promise)
const getData = () => {
  const pr = new Promise((resolve, reject) => {
    resolve("Promise resolved");
  });

  return pr;
};

const data = getData();
// data.then((res) => console.log(res));

// With async
async function handleAsync() {
  return "Namaste JavaScript!";
}

const dataPromise = handleAsync();
// dataPromise.then((res) => console.log(res));

// With async and promise
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async Promise resolved!");
  }, 5000);
});

const handlePromise = async () => {
  return pr;
};

const asyncData = handlePromise();
// asyncData.then((res) => console.log(res));

// With await

const handlePromise2 = async () => {
  const val = await pr;
  console.log(val);
};

// handlePromise2();

// Need for await
function getData2() {
  pr.then((res) => console.log(res));
  console.log("Namaste Javascript again!"); // This line will run first as the promises are sent outside the callstack for execution and then sent to microtask queue, but the main thread wil continue execution as Time, Tide and JavaScript waits for none.
}

// getData2();

// With async and await
const handlePromise3 = async () => {
  const val = await pr;
  console.log("Namaste JavaScript with async await!");
  console.log(val);
};

// handlePromise3();

// With multiple promises
const pr1 = new Promise((resolve, rejct) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 10000);
});

const pr2 = new Promise((resolve, rejct) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 5000);
});

const handleMultiplePromises = async () => {
  console.log("Hello World!");
  const val1 = await pr1;
  console.log("Namaste JavaScript!");
  console.log(val1);

  const val2 = await pr2;
  console.log("Namaste JavaScript 2!");
  console.log(val2);
};

// handleMultiplePromises();

const handleMultiplePromisesReversed = async () => {
  console.log("Hello World!");
  const val2 = await pr2;
  console.log("Namaste JavaScript 2!");
  console.log(val2);

  const val1 = await pr1;
  console.log("Namaste JavaScript 1!");
  console.log(val1);
};

// handleMultiplePromisesReversed();

// Real life example
const API_URL = "https://api.github.com/users/rajesh-ranjan-git";
const promise = fetch(API_URL);

const getGithubUser = async () => {
  // Fetch returns a promise so handle with await
  const githubUser = await promise;

  // To get data need to const to object using .json() which also returns a promise so handle with await again
  const user = await githubUser.json();
  console.log(user);
};

getGithubUser();
