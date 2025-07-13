// call, apply and bind methods are used for function borrowing/sharing

// call - it takes first argument as the reference to object that will call the function and multiple optional arguments for passing parameters to the function

var firstName = "Rajesh";
var lastName = "Ranjan";

const person1 = {
  firstName: "Rajesh",
  lastName: "Ranjan",
  age: 29,
  getDetails: function () {
    console.log(
      this.firstName + " " + this.lastName + " is " + this.age + " years old."
    );
  },
  getDetailsWithAddress: function (hometown, state) {
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
  },
};

const person2 = {
  firstName: "Sayantanee",
  lastName: "Mohanta",
  age: 30,
};

const getFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const getFullNameArrow = () => {
  console.log(this.firstName + " " + this.lastName);
};

const getFullNameWithAddress = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      ", " +
      state +
      "."
  );
};

const getFullNameArrowWithAddress = (hometown, state) => {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      ", " +
      state +
      "."
  );
};

getFullName.call(person1);

getFullNameArrow.call(person1); // does not work with arrow functions as for arrow functions, this keyword points to its lexical scope i.e window which does not have the firstName and lastName variables so will give undefined for both, even if it had, the variables needs to be declared using var and not let or const (because of hoisting, let and const variables are not available to window object as they are block scoped)

getFullNameArrow(); // but then there is no purpose of calling it with call, apply or bind as it can accessed directly with this function too

// with arguments
getFullNameWithAddress.call(person1, "Dhanbad", "Jharkhand");

getFullNameArrowWithAddress.call(person1, "Dhanbad", "Jharkhand");

// apply - it takes first argument as the reference to object that will call the function same as call just the difference is that it takes the rest optional arguments apart from first as a list of parameters to pass to the function

getFullName.apply(person1);
getFullNameArrow.apply(person1);
getFullNameWithAddress.apply(person1, ["Dhanbad", "Jharkhand"]);
getFullNameArrowWithAddress.apply(person1, ["Dhanbad", "Jharkhand"]);

// bind - it takes first argument as the reference to object that will call the function and multiple optional arguments to pass as parameter to the function same as call but the difference is that it does not call the method instead it returns a method bound to the object which can be called later

const getFullNameWithBind = getFullName.bind(person1);
const getFullNameArrowWithBind = getFullNameArrow.bind(person1);
const getFullNameWithBindAndAddress = getFullNameWithAddress.bind(person1, [
  "Dhanbad",
  "Jharkhand",
]);
const getFullNameArrowWithBindAndAddress = getFullNameArrowWithAddress.bind(
  person1,
  ["Dhanbad", "Jharkhand"]
);

console.log(getFullNameWithBind);
console.log(getFullNameArrowWithBind);
console.log(getFullNameWithBindAndAddress);
console.log(getFullNameArrowWithBindAndAddress);

getFullNameWithBind();
getFullNameArrowWithBind();
getFullNameWithBindAndAddress();
getFullNameArrowWithBindAndAddress();

// Function borrowing/sharing
person1.getDetails.call(person2);
person1.getDetailsWithAddress.call(person2, "Kolkata", "West Bengal");
person1.getDetails.apply(person2);
person1.getDetailsWithAddress.apply(person2, ["Kolkata", "West Bengal"]);
const getDetailsWithBind = person1.getDetails.bind(person2);
const getDetailsWithBindAndAddress = person1.getDetails.bind(
  person2,
  "Kolkata",
  "West Bengal"
);
console.log(getDetailsWithBind);
getDetailsWithBind();
console.log(getDetailsWithBindAndAddress);
getDetailsWithBindAndAddress();
