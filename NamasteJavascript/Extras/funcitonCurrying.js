// Calling functions inside functions inside function nested to any deep level is called Function currying and it can be achieved using closures as well as bind.

function sumTwoNumbers(x, y) {
  return x + y;
}

console.log(sumTwoNumbers(3, 4));

// Using closure
function sumWithClosure(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sumWithClosure(2)(3)(4));

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending email to ${to} with subject ${subject} : ${body}.`);
    };
  };
}

// Using arrow function
const sendAutoEmailArrow = (to) => (subject) => (body) =>
  console.log(`Sending email to ${to} with subject ${subject} : ${body}.`);

let step1 = sendAutoEmail("rajeshranjan8271@gmailcom");
let step2 = step1("New order confirmation");
step2("Hey Rajesh, here is something for you!");

let step1Arrow = sendAutoEmail("sayantaneemohanta@gmailcom");
let step2Arrow = step1Arrow("New order confirmation");
step2Arrow("Hey Rajesh, here is something for you!");

// Using bind
const sumWithBind = function (a, b) {
  console.log(a + b);
};

const sumTwoNumbersWithBind = sumWithBind.bind(this, 5);
sumTwoNumbersWithBind(7);

let sumThreeNumbersWithBind = sumWithBind.bind(this, 7);
sumThreeNumbersWithBind(9);

let sumFourNumbersWithBind = sumThreeNumbersWithBind.bind(this, 8);
sumFourNumbersWithBind();

// sum(1)(2)(3)(4)...
const sum = function (a) {
  return function (b) {
    if (b || b === 0) {
      return sum(a + b);
    }

    return a;
  };
};

console.log(sum(3)());
console.log(sum(0)());
console.log(sum(0)(0)());
console.log(sum(3)(2)());
console.log(sum(3)(0)());
console.log(sum(3)(2)(5)());
console.log(sum(3)(2)(5)(7)());
console.log(sum(3)(2)(5)(7)(0)());
