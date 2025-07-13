"use strict"; // to run this javascript file in strict mode

// this keyword in global space
console.log(this); // global object, window in browsers, global in nodejs and can be different for different JS engines wherever we run this javascript (SpiderMonkey or chakra)

// this keyword inside a function
function x() {
  console.log(this); // value depends on strict mode - undefined and non-strict mode - window
}

// this keyword in strict mode - (this substitution - if the value of this keyword is undefined or null, it will be replaced with global object only in non-strict mode)

// this keyword value depends on how this keyword is called (window)
x(); // undefined - when called without any reference
window.x(); // window -- when called with window reference

// from here strict or non-script mode does not matter
// this keyword inside an object's method

const obj1 = {
  a: 10,
  b: function () {
    console.log(this);
  },
};

obj1.b();

// call, apply, and bind methods (sharing methods)
const person1 = {
  name: "Rajesh",
  getName: function () {
    console.log(this.name);
  },
};

person1.getName();

const person2 = {
  name: "Sayantanee",
};

person1.getName.call(person2); // this keyword reference to the object that is calling the function : person2

// this keyword inside arrow functions - arrow function does not its own this keyword bind and it points to its lexical context
const c = () => {
  console.log(this);
};

c();

const obj2 = {
  d: 20,
  e: () => {
    console.log(this);
  },
};

obj2.e(); // it will point to window instead of obj2 (lexical context)

// this keyword inside nested arrow functions
const obj3 = {
  d: 30,
  e: function () {
    const f = () => {
      console.log(this); // points to lexical context which is obj3
    };

    f();
  },
};

obj3.e();

// this keyword inside DOM - points to the HTML element that calls it
