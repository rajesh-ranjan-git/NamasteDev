console.log("Start");

setTimeout(function cb() {
  console.log("Callback with 5 secs");
}, 5000);

// We can use this when we have to defer some code as it is not so important than others
setTimeout(function cb() {
  console.log("Callback with 0 secs");
}, 0);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

console.log("While starts at : ", startDate);

// Simulate 10 secs delay
while (endDate <= startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires at : ", endDate);

// Concurrency model
