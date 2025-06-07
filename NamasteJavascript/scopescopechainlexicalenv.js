function a() {
  console.log("b : ", b);
}

var b = 10;
a();

function c() {
  d();

  function d() {
    e();

    function e() {
      console.log("b : ", b);
    }
  }
}

c();

function f() {
  var g = 100;
  h();

  function h() {
    console.log("g : ", g);
  }
}

f();

console.log("g : ", g);
