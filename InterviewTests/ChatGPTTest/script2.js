for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// 3
// 3
// 3

console.log([] + []); // Arrays are coerced to strings. -> [].toString() + [].toString() -> ""

// Which hook would you use to avoid recalculating an expensive value on every render? C. useMemo

// SELECT e.name, d.dept_name FROM Employees e JOIN Departments d ON e.dept_id = d.id;

// Which HTTP method is considered idempotent? -> D. PUT

// A component re-renders when: D. All of the above

const obj = {
  a: 1,
  b: {
    c: 2
  }
};

const copy = { ...obj };

copy.b.c = 100;

console.log(obj.b.c); // creates only a shallow copy. Both objects share same memory -> 100

// Which of the following improves query performance most? B. Indexes

function reverse(str) {
    let temp = "";

    for(let i = str.length; i > 0; i--) {
        temp = temp + str[i - 1]
    }
    

    return temp;
}

reverse("hello")

// What is the primary advantage of Refresh Tokens? C. Obtain new access tokens without forcing users to log in again