const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("myEvent", (data) => {
  console.log("myEvent occurred with data:", data);
});
myEmitter.emit("myEvent", { message: "Hello from the emitter!" });
