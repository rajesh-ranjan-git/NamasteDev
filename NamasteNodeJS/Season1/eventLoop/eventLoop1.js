/*
 * a : 100
 * Last line of the file.
 * Timer expired
 * setImmediate !
 * File Reading callback !
 */

const fs = require("fs"); // Synchronous code

const a = 100; // Synchronous code

setImmediate(() => console.log("setImmediate !")); // Check phase

fs.readFile("./file.txt", "utf8", () => {
  // Poll phase
  console.log("File Reading callback !");
});

setTimeout(() => {
  // Timers phase
  console.log("Timer expired");
}, 0);

function printA() {
  // Synchronous code
  console.log("a : ", a);
}

printA(); // Synchronous code

console.log("Last line of the file."); // Synchronous code
