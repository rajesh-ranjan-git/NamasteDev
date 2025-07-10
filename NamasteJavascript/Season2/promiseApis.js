const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 4 rejected");
  }, 1000);
});

const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 5 rejected");
  }, 2000);
});

const pr6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 6 rejected");
  }, 3000);
});

// Promise.all([pr1, pr2, pr3]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.all([pr1, pr2, pr3]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.allSettled([pr1, pr2, pr3]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.allSettled([pr1, pr4, pr3]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.allSettled([pr4, pr5, pr6]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.race([pr2, pr4, pr3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race([pr1, pr4, pr3])
//   .then((res) => console.log(res))
//     .catch((err) => console.log(err));

Promise.any([pr1, pr5, pr6])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.any([pr4, pr5, pr6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
