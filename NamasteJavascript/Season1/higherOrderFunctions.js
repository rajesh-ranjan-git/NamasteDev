function x() {
  console.log("Namaste JavaScript!");
}

function y(x) {
  x();
}

y(x);

// Bad Code
console.log("Using Bad Approach");
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  console.log("Area : ", output);
};

calculateArea(radius);

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }

  console.log("Circumference : ", output);
};

calculateCircumference(radius);

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  console.log("Diameter : ", output);
};

calculateDiameter(radius);

// Better Approach
console.log("Using Better - Modular Approach");
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(i));
  }

  console.log("Output : ", output);
};

calculate(radius, area);
calculate(radius, circumference);
calculate(radius, diameter);

// Using map
console.log("Using map");

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// Polyfill for map
console.log("Using Polyfill for map");

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(i));
  }

  return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
