// Polyfills - It is our own implementation of any predefined method

const person1 = {
  firstName: "Rajesh",
  lastName: "Ranjan",
  age: 29,
};

const person2 = {
  firstName: "Sayantanee",
  lastName: "Mohanta",
  age: 30,
};

const getDetails = function () {
  console.log(
    this.firstName + " " + this.lastName + " is " + this.age + " years old."
  );
};

const getDetailsWithAddress = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is " +
      this.age +
      " years old and is from " +
      hometown +
      ", " +
      state +
      "."
  );
};

const getDetailsWithAddressAndCountry = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is " +
      this.age +
      " years old and is from " +
      hometown +
      ", " +
      state +
      ", " +
      country +
      "."
  );
};

// call
getDetails.call(person1);
getDetailsWithAddress.call(person1, "Dhanbad", "Jharkhand");
getDetailsWithAddressAndCountry.call(person1, "Dhanbad", "Jharkhand", "India");

// Polyfill for call
Function.prototype.myCall = function (thisObj = {}, ...args) {
  if (typeof this !== "function") {
    console.error(this, "is not callable!");
  }

  thisObj.fn = this;

  thisObj.fn(...args);
};

getDetails.myCall(person1);

const dummyGetDetails = "Rajesh Ranjan";
// dummyGetDetails.myCall(person1);

// getDetailsWithAddress.myCall(person1, "Dhanbad", "Jharkhand");
// getDetailsWithAddressAndCountry.myCall(
//   person1,
//   "Dhanbad",
//   "Jharkhand",
//   "India"
// );

// apply
getDetails.apply(person1);
getDetailsWithAddress.apply(person1, ["Dhanbad", "Jharkhand"]);
getDetailsWithAddressAndCountry.apply(person1, [
  "Dhanbad",
  "Jharkhand",
  "India",
]);

// Polyfill for apply
Function.prototype.myApply = function (thisObj = {}, args = []) {
  if (typeof this !== "function") {
    console.error(this, "is not callable!");
  }

  thisObj.fn = this;
  thisObj.fn(...args);
};

getDetails.myApply(person1);
getDetailsWithAddress.myApply(person1, ["Dhanbad", "Jharkhand"]);
getDetailsWithAddressAndCountry.myApply(person1, [
  "Dhanbad",
  "Jharkhand",
  "India",
]);

// bind
const getDetailsWithBind = getDetails.bind(person1);
const getDetailsWithBindAndAddress = getDetailsWithAddress.bind(
  person1,
  "Dhanbad",
  "Jharkhand"
);
const getDetailsWithBindAndAddressAndCountry =
  getDetailsWithAddressAndCountry.bind(
    person1,
    "Dhanbad",
    "Jharkhand",
    "India"
  );

getDetailsWithBind();
getDetailsWithBindAndAddress();
getDetailsWithBindAndAddressAndCountry();

// Polyfill for bind
Function.prototype.myBind = function (thisObj = {}, ...args) {
  if (typeof this !== "function") {
    console.error(this, "is not callable!");
  }

  const obj = this;

  return function (...params) {
    obj.call(thisObj, ...[...args, ...params]);
  };
};

const getDetailsWithMyBind = getDetails.myBind(person1);
const getDetailsWithMyBindAndAddress = getDetailsWithAddress.myBind(
  person1,
  "Dhanbad",
  "Jharkhand"
);
// const getDetailsWithMyBindAndAddressAndCountry =
//   getDetailsWithAddressAndCountry.myBind(
//     person1,
//     "Dhanbad",
//     "Jharkhand",
//     "India"
//   );
const getDetailsWithMyBindAndAddressAndCountry =
  getDetailsWithAddressAndCountry.myBind(person1, "Dhanbad", "Jharkhand");

getDetailsWithMyBind();
getDetailsWithMyBindAndAddress();
// getDetailsWithMyBindAndAddressAndCountry();
getDetailsWithMyBindAndAddressAndCountry("India");
