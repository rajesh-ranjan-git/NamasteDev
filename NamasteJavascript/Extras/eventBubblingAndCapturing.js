// Event Bubbling and capturing are the way how events propagates in DOM tree.

// Event Bubbling - All events propagates up the hierarchy till the end of the DOM tree.
// Event Capturing/Trickling - All events propagates down the hierarchy till the end of the DOM tree.

// First Event Capturing happens followed by Event Bubbling and both happens every time unless we explicitly stop the propagation.

// We can alter this by using an optional useCapture boolean argument which is set to false by default meaning capturing (callback will be called in the capturing phase).

// Default - Event Bubbling
// document.querySelector("#grandParent").addEventListener("click", () => {
//   console.log("Grand Parent clicked.");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent clicked.");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child clicked.");
// });

// Event Bubbling with useCapture argument
// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent clicked.");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked.");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked.");
//   },
//   false
// );

// Event Capturing/Trickling with useCapture argument
// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent clicked.");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked.");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked.");
//   },
//   true
// );

// Since both event bubbling and capturing happens by every time, it creates performance issues

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent clicked.");
//   },
//   true // capturing
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked.");
//   },
//   false // bubbling
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked.");
//   },
//   true // capturing
// );

// First capturing phase happens and it sees the flag true on grandparent and calls its callback then goes to parent and sees the false flag and does not execute the callback during capturing as it will be called during bubbling phase adn then it reaches child and sees false so it calls the callback during capturing thens starts the bubbling phase and will only execute the callback for parent as it was flagged false for bubbling phase.
// So the output is grandparent clicked  followed by Child clicked anf then parent clicked.

// To stop the propagating we need to use event.stopPropagation() method in the callback.

// document.querySelector("#grandParent").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("Grand Parent clicked.");
//   },
//   true // capturing
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent clicked.");
//   },
//   false // bubbling
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   (e) => {
//     console.log("Child clicked.");
//   },
//   true // capturing
// );

// Here, first in capturing phase grandparent callback is called and see the stopPropagation method and stops then and there and none of the parent's or child's callbacks got called

document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent clicked.");
  },
  true // capturing
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked.");
  },
  false // bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Child clicked.");
  },
  true // capturing
);

// Here in capturing phase grand parent callback got called then goes to parent and sees the flag true so skips the callback execution to execute in the bubbling phase and then it reaches child where it sees the stopPropagation method and stops there without executing the parent and event got stopped before bubbling phase even started for parent callback to be called.
