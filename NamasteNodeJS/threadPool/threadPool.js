const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

console.log("Start hashing");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("First Key is generated!");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated!");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Third Key is generated!");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Fourth Key is generated!");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Fifth Key is generated!");
});
