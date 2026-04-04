// Check if Service Worker is available in our browser.
if (navigator.serviceWorker) {
  console.log("Service Worker is available!");

  // Register our Service Worker
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((res) => {
      console.log("Service Worker registered successfully!");
    })
    .catch((error) =>
      console.error("Error registering Service Worker:", error),
    );

  //   navigator.serviceWorker
  //     .register("./serviceWorker.js", {
  //       scope: "./", // Root level scope
  //     })
  //     .then((res) => {
  //       console.log("Service Worker registered successfully!");
  //     })
  //     .catch((error) =>
  //       console.error("Error registering Service Worker:", error),
  //     );
}

// NOTE: Ther can be multiple service workers running for same application for different purpose

// NOTE: Service Workers can have a specific scope also (may be at folder level aslo)

// Right now our Service Worker has global scope as it is in the root level
