// Prototypal Inheritance is very different in javascript than inheritance other languages
// It means inheriting properties from one object to other
// It is done using __proto__ property which is made available to every object in javascript which is same as prototype property
// Everything in javascript is ultimately an object

// Object prototypal inheritance
// console.log(Object);
// console.log(Object.__proto__);
// console.log(Object.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(Object.__proto__.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// Function prototypal inheritance
// console.log(Function);

// console.log(Function.__proto__);
// console.log(Function.prototype);
// console.log(Object.__proto__);

// console.log(Function.__proto__.__proto__);
// console.log(Function.prototype.__proto__);
// console.log(Object.prototype);

// console.log(Function.__proto__.__proto__.__proto__);
// console.log(Function.prototype.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// Number prototypal inheritance
// console.log(Number);

// console.log(Number.prototype);

// console.log(Number.__proto__);
// console.log(Object.__proto__);

// console.log(Number.__proto__.__proto__);
// console.log(Number.prototype.__proto__);
// console.log(Object.prototype);

// console.log(Number.__proto__.__proto__.__proto__);
// console.log(Number.prototype.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// String prototypal inheritance
// console.log(String);

// console.log(String.prototype);

// console.log(String.__proto__);
// console.log(Object.__proto__);

// console.log(String.__proto__.__proto__);
// console.log(String.prototype.__proto__);
// console.log(Object.prototype);

// console.log(String.__proto__.__proto__.__proto__);
// console.log(String.prototype.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// Boolean prototypal inheritance
// console.log(Boolean);
// console.log(Boolean.__proto__);
// console.log(Boolean.prototype);
// console.log(Boolean.__proto__.__proto__);
// console.log(Boolean.prototype.__proto__);
// console.log(Boolean.__proto__.__proto__.__proto__);
// console.log(Boolean.prototype.__proto__.__proto__);

// Variables
const a = 10;

// console.log(a);

// console.log(a.__proto__);
// console.log(Number.prototype); // Same as a.__proto__

// console.log(Number.__proto__.__proto__); // Same as a.__proto__
// console.log(a.__proto__.__proto__);
// console.log(Object.prototype); // Same as a.__proto__.__proto__

// console.log(a.__proto__.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// Functions
function fn() {
  console.log("function");
}

// console.log(fn);

// console.log(fn.prototype);

// console.log(fn.__proto__);

// console.log(fn.__proto__.__proto__);
// console.log(fn.prototype.__proto__);

// console.log(fn.__proto__.__proto__.__proto__);
// console.log(fn.prototype.__proto__.__proto__);

// Objects
const person = {
  firstName: "Rajesh",
  lastName: "Ranjan",
  age: 29,
  getDetails: function () {
    console.log(
      this.firstName + " " + this.lastName + " is " + this.age + " years old."
    );
  },
};

// console.log(person);

// console.log(person.__proto__);
// console.log(Object.prototype);

// console.log(person.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

const person2 = {
  firstName: "Sayantanee",
  lastName: "Mohanta",
};

// This is not recommended at all as it will lead to performance and other issues since we are overriding javascript in-built things
person2.__proto__ = person;

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age); // Inherited from person
person2.getDetails(); // Inherited from person
