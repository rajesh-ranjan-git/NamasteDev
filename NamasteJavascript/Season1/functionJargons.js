a();
// b();

// Function Statement / Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
};

// Anonymous Function
(function () {
  console.log("Anonymous Fcuntion");
})();

// Named Function Expression
var c = function d() {
  console.log("d caslled within c");
};

c();
// d();

// Parameters
function e(f, g) {
  console.log(f);
  console.log(g);
}

// Arguments
e(2, 3);

// First Class Functions / First Class Citizens
var h = function (i) {
  console.log("h called");
  i();
  return function () {
    console.log("Returned function");
  };
};

console.log(
  h(function () {
    console.log("Passed function");
  })
);

h(function () {
  console.log("Passed function");
})();
