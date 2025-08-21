const fs = require("fs");
const https = require("https");

console.log("Hello World!");

var a = 1078698;
var b = 20986;

fs.readFileSync("./file.txt", "utf8");

console.log("This line will only execute after the file is read.");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully!");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds.");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log(c);
console.log("File end");
