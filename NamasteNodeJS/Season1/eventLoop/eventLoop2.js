/*
 * a : 100
 * Last line of the file.
 * process.nextTick
 * Promise
 * Timer expired
 * setImmediate !
 * File Reading callback !
 */

const fs = require("fs"); // Synchronous code

const a = 100; // Synchronous code

setImmediate(() => console.log("setImmediate !")); // Check phase

Promise.resolve("Promise").then(console.log); // Microtask

fs.readFile("./file.txt", "utf8", () => {
  // Poll phase
  console.log("File Reading callback !");
});

setTimeout(() => {
  // Timers phase
  console.log("Timer expired");
}, 0);

process.nextTick(() => console.log("process.nextTick")); // Microtask

function printA() {
  // Synchronous code
  console.log("a : ", a);
}

printA(); // Synchronous code

console.log("Last line of the file."); // Synchronous code
