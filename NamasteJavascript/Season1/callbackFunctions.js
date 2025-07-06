// What is a Callback Function in JavaScript

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// JavaScript is a single-threaded and synchronous language.

// Blocking tht main thread

// Power of callback? -> Asynchronous behavior

// Deep about Event Listeners
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked");
});

// Closure demo with Event Listeners
function attachEventListeners() {
  let count = 0;
  document
    .getElementById("clickMeCount")
    .addEventListener("click", function xyz() {
      console.log("Button Clicked", ++count);
    });
}

attachEventListeners();

// Garbage collection and removeEventListeners
