console.log("Hello World!");

var a = 1078698;
var b = 20986;

// This setTimeout will only be pushed to call stack once the call stack is empty, so it will only run after all the code in this file has finished the execution
setTimeout(() => {
  console.log("Call me ASAP!");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds!");
}, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log(c);
