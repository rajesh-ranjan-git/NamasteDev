/*
 * Last line of the file.
 * process.nextTick
 * inner process.nextTick
 * Promise
 * Timer expired
 * setImmediate !
 * File Reading callback !
 */

const fs = require("fs"); // Synchronous code

setImmediate(() => console.log("setImmediate !")); // Check phase

setTimeout(() => {
  // Timer phase
  console.log("Timer expired");
}, 0);

Promise.resolve("Promise").then(console.log); // Microtask

fs.readFile("./file.txt", "utf8", () => {
  // Poll phase
  console.log("File Reading callback !");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner process.nextTick")); // Microtask
  console.log("process.nextTick"); // Synchronous code
}); // Microtask

console.log("Last line of the file."); // Synchronous code
