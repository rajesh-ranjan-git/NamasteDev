const cart = ["shoes", "pants", "kurta"];

// Producer end
const createOrder = (cart) => {
  const pr = new Promise(function (resolve, reject) {
    // Logic for creating order

    // createOrder
    // validateCart
    // orderId

    const validateCart = (cart) => (cart ? true : false);

    if (!validateCart(cart)) {
      reject(new Error("Cart is not valid"));
    }

    // Logic for createOrder
    const orderId = "213434";
    console.log("Order created");
    setTimeout(
      () => (orderId ? resolve(orderId) : reject("Unable to create order")),
      2000
    );
  });

  return pr;
};

const proceedToPayment = (orderId) => {
  const pr = new Promise(function (resolve, reject) {
    // Logic for processing payment

    const validateOrderId = (orderId) => (orderId ? true : false);

    if (!validateOrderId(orderId)) {
      reject(new Error("orderId is not valid"));
    }

    // Logic for proceedToPayment
    const paymentId = "345234";
    console.log("Payment successful");
    setTimeout(
      () =>
        paymentId ? resolve(paymentId) : reject("Unable to complete payment"),
      2000
    );
  });

  return pr;
};

const showOrderSummary = (paymentId) => {
  const pr = new Promise(function (resolve, reject) {
    // Logic for generating order summary

    const validatePaymentId = (paymentId) => (paymentId ? true : false);

    if (!validatePaymentId(paymentId)) {
      reject(new Error("paymentId is not valid"));
    }

    // Logic for showOrderSummary
    const id = "22346357";
    console.log("Order Summary generated");
    setTimeout(
      () => (id ? resolve(id) : reject("Unable to generate order summary")),
      2000
    );
  });

  return pr;
};

const updateWallet = (id) => {
  const pr = new Promise(function (resolve, reject) {
    // Logic for updating wallet

    const validateId = (id) => (id ? true : false);

    if (!validateId(id)) {
      reject(new Error("id is not valid"));
    }

    // Logic for updateWallet
    console.log("Wallet updated");
    setTimeout(() => resolve(id), 2000);
  });

  return pr;
};

// Consumer end
// const promise = createOrder(cart)
//   .then((orderId) =>
//     proceedToPayment(orderId).then((paymentId) =>
//       showOrderSummary(paymentId).then((id) =>
//         updateWallet(id).then(() => {
//           console.log("orderId : ", orderId);
//           console.log("paymentId : ", paymentId);
//           console.log("id : ", id);
//           console.log("Order successful");
//         })
//       )
//     )
//   )
//   .catch((err) => console.log(err.message));

// console.log(promise);

// This is again a promise hell

// Solution

createOrder(cart)
  .then((orderId) => {
    console.log("orderId : ", orderId);
    return proceedToPayment(orderId);
  })
  .catch((err) => console.log(err.message))
  .then((paymentId) => {
    console.log("paymentId : ", paymentId);
    return showOrderSummary(paymentId);
  })
  .catch((err) => console.log(err.message))
  .then((id) => {
    console.log("id : ", id);
    return updateWallet(id);
  })
  .catch((err) => console.log(err.message))
  .then(() => {
    console.log("Order successful");
  })
  .catch((err) => console.log(err.message))
  .then(() => console.log("I will always run."));

// We can write multiple catch statements or the last catch will catch all the above errors

createOrder(cart)
  .then((orderId) => {
    console.log("orderId : ", orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentId) => {
    console.log("paymentId : ", paymentId);
    return showOrderSummary(paymentId);
  })
  .then((id) => {
    console.log("id : ", id);
    return updateWallet(id);
  })
  .catch((err) => console.log(err.message))
  .then(() => {
    console.log("Order successful");
  })
  .catch((err) => console.log(err.message))
  .then(() => console.log("I will always run."));
