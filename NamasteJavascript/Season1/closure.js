function x() {
  var a = 10;

  function y() {
    console.log("a : ", a);
  }
  y();
}
x();

function k() {
  var a = 20;

  function l() {
    console.log("a : ", a);
  }
  return l;
}
var m = k();

console.log("m : ", m);
m();

function n() {
  var a = 30;

  return function o() {
    console.log("a : ", a);
  };
}
var o = n();

console.log("o : ", o);
o();
n()();

function p() {
  var a = 40;

  var b = function q() {
    console.log("a : ", a);
  };

  a = 50;
  return b;
}
var r = p();

console.log("r : ", r);
r();

function s() {
  var c = 60;

  function t() {
    var d = 70;

    function u() {
      console.log("c : ", c);
      console.log("d : ", d);
    }

    u();
  }

  t();
}

s();
