console.log(1 + "2" + 3); // 123

console.log("5" - 2); // 3

// What is the purpose of React.memo()? B. Prevent unnecessary component re-renders

// SELECT MAX(salary) FROM salaryTable

// SELECT MAX(salary) FROM salaryTable WHERE salary < (SELECT MAX(salary) FROM salaryTable);

// SELECT DISTINCT salary FROM salaryTable ORDER BY salary DESC LIMIT 1 OFFSET 1;

const arr = [1, 2, 3];

arr.length = 0;

console.log(arr); // []

// Which status code is generally returned after successfully creating a resource? -> B. 201

// Where should a JWT typically be sent in an API request? C. Authorization Header

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

isPalindrome("madam")

// fs.readFile() -> It is async method that reads a given file outside of the main thread without blocking.
// fs.readFileSync() -> It is synchronous method that reads a given file outside and blocks the main thread.