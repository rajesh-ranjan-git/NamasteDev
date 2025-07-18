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

obj1.b(); // points to object itself

// call, apply, and bind methods (sharing methods)
const person1 = {
  name: "Rajesh",
  getName: function () {
    console.log(this.name);
  },
};

person1.getName(); // this function is called method because it is associated with an object, when it will be in global space it is called a function

const person2 = {
  name: "Sayantanee",
};

person1.getName.call(person2); // this keyword reference to the object that is calling the function : person2

// this keyword inside arrow functions - arrow function does not have its own this keyword bind and it points to its lexical context
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
  f: 30,
  g: function () {
    const h = () => {
      console.log(this); // points to lexical context which is obj3
    };

    h();
  },
};

obj3.g();

const obj4 = {
  i: 30,
  j: () => {
    const k = () => {
      console.log(this); // points to lexical context which is obj4, but since its lexical context is also arrow function, it will points to its lexical scope with is window
    };

    k();
  },
};

obj4.j();

// this keyword inside DOM - points to the HTML element that calls it
