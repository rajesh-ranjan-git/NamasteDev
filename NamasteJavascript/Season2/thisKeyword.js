"use strict"; // to run this javascript file in strict mode

// this in global space
console.log(this); // global object, window in browsers, global in nodejs and can be different for different JS engines wherever we run this javascript (SpiderMonkey or chakra)

// this inside a function
function x() {
  console.log(this); // value depends on strict mode - undefined and non-strict mode - window
}

// this in strict mode - (this substitution - if the value of this keyword is undefined or null, it will be replaced with global object only in non-strict mode)

// this value depends on how this is called (window)
x(); // undefined - when called without any reference
window.x(); // window -- when called with window reference

// this inside an object's method

// call, apply, and bind methods (sharing methods)

// this inside arrow functions

// this inside nested arrow functions

// this inside DOM
