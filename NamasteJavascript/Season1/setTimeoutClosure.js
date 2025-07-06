function x() {
  var i = 10;
  setTimeout(function () {
    console.log("i : ", i);
  }, 3000);

  console.log("Namaste Javascript");
}
x();

function y() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("i : ", i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
y();

function z() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("i : ", i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
z();

function u() {
  for (var i = 1; i <= 3; i++) {
    function v(i) {
      setTimeout(function () {
        console.log("i : ", i);
      }, i * 1000);
    }

    v(i);
  }

  console.log("Namaste Javascript");
}
u();
