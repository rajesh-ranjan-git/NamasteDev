// Event Delegation is an optimization technique to handle performance, storage and other issues caused by event bubbling and capturing.

// It is based on concept of event bubbling that events bubble up the hierarchy till the end of DOM tree.

// Attaching event handlers takes memory and attaching event handlers on each and every element will take a lot of memory and cause performance issues.

// To prevent this we would need to remove the event listeners as well to save memory.

// Instead we should attach a single event handler to the parent element which will handle the events on all its child elements because of event bubbling.

const content = document.querySelector("#content");

document.querySelector("#categories").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    content.innerText = e.target.innerText;
  }
});

// By adding event listener to just hte parent ul, we saved a lot of memory and the multiple events are not lying around the page, just 1 on the parent and in that way we do not have to remove these event listeners to save memory.

// Limitation of event delegation
// Not all the events bubble up (e.g. focus, scroll, blur, mouseenter, mouseleave, load, unload etc) which needs to be handled separately.

// data attribute - are used to set specific properties to elements
document.querySelector("#inputDiv").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
