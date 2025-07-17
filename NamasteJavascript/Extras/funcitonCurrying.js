// Calling functions inside functions inside function nested to any deep level is called Function currying and it can be achieved using closures as well as bind.

function sumTwoNumbers(x, y) {
  return x + y;
}

console.log(sumTwoNumbers(3, 4));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(3)(4));

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
