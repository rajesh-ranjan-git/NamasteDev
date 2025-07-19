// Debouncing and Throttling are the optimization techniques to prevent the events to trigger the function too frequently.

// Debouncing -> It is limiting the callback function to call after some idle time of the event firing so that the callback function does not get executed on every event fired.

let count = 0;

const getData = (...arg) => {
  console.log("Getting data...", ++count, ...arg);
};

const debounce = (callback, delay, ...args) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const debounceFunction = debounce(getData, 400, "Rajesh");

// Throttling -> It is limiting the number of execution of callback function repeatedly by adding delay between 2 consecutive calls on the event so that the callback function does not get executed on every event fired.

const throttle = (callback, delay, ...args) => {
  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      callback(...args);
      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
};

const throttleFunction = throttle(getData, 4000, "Ranjan");
