const crypto = require("crypto");

console.log("Hello World!");

var a = 1078698;
var b = 20986;

// Password Base Key Derivative Function
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512"); // sync function - it will block the main thread, don't use these functions
console.log("First key is generated");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  // async function
  console.log("Second Key is generated!");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log(c);
