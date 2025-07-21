// Common JS modules - This is by default in the configuration file - package.json
// If using commonjs, package.json configuration file is not required
// With commonjs, it works synchronous by default and the code will block until the module gets loaded
// The code runs in non-strict mode by default
// By default used in Node.js
// Variables can be declared without using type

// require("./xyz.js");
// require("./xyz"); // Both are same
// const calculateSum = require("./sum");
// const obj = require("./sum");
// const { x, calculateSum } = require("./sum");

// ES modules - Latest way to import modules, as per ECMAScript this will soon be the standard going forward
// It supports asynchronous operations by default and does not block the code  for importing modules
// The code runs in strict mode by default
// By default used by frameworks like React, Angular, Next JS etc
// Typ is compulsory while declaring variables (var, let or const)

import { x, calculateSum } from "./sum";

console.log("Main file");

var a = 10;
var b = 20;

x = 30; // Will not work with ES syntax

// calculateSum(a, b);
// console.log(obj.x);
// obj.calculateSum(a, b);

console.log(x);
calculateSum(a, b);
