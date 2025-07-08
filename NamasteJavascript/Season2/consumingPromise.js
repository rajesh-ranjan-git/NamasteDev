const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// Promise example
const promise = fetch("https://api.github.com/users/rajesh-ranjan-git");

console.log(promise);
promise.then((response) => response.json()).then((data) => console.log(data));

// Callback Hell and Inversion of Control
createOrder(cart, function (orderId) {
  return proceedToPayment(orderId, function (paymentId) {
    return showOrderSummary(paymentId, function (id) {
      return updateWallet(id);
    });
  });
});

// Solution
createOrder(cart).then(orderId, function (orderId) {
  return proceedToPayment(orderId).then(paymentId, function (paymentId) {
    return showOrderSummary(paymentId).then(id, function (id) {
      return updateWallet(id);
    });
  });
});

// Solution using arrow function
createOrder(cart).then(orderId, (orderId) =>
  proceedToPayment(orderId).then(paymentId, (paymentId) =>
    showOrderSummary(paymentId).then(id, (id) => updateWallet(id))
  )
);
