/*
 * Last line of the file.
 * 2nd process.nextTick
 * Promise
 * 1st Timer expired
 * 1st setImmediate !
 * File Reading callback !
 * 1st process.nextTick
 * 2nd setImmediate !
 * 2nd Timer expired
 */

const fs = require("fs"); // Synchronous code

setImmediate(() => console.log("1st setImmediate !")); // Check phase

setTimeout(() => {
  // Timer phase
  console.log("1st Timer expired");
}, 0);

Promise.resolve("Promise").then(console.log); // Microtask

fs.readFile("./file.txt", "utf8", () => {
  // Poll phase
  setTimeout(() => {
    // Timer phase
    console.log("2nd Timer expired");
  }, 0);

  process.nextTick(() => console.log("1st process.nextTick")); // Microtask

  setImmediate(() => console.log("2nd setImmediate !")); // Check phase

  console.log("File Reading callback !"); // Synchronous code
});

process.nextTick(() => console.log("2nd process.nextTick")); // Microtask

console.log("Last line of the file."); // Synchronous code
