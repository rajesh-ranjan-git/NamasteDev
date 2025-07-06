var a = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("a : ", a);
  console.log("b : ", b);
  console.log("c : ", c);
}

console.log("a : ", a);
// console.log("b : ", b);
// console.log("c : ", c);

var d = 1000;

{
  var d;
  console.log("d : ", d);
}

console.log("d : ", d);

let e = 10000;
const f = 20000;

{
  let e = 40;
  const f = 50;

  console.log("e : ", e);
  console.log("f : ", f);
}

console.log("e : ", e);
console.log("f : ", f);

let g = 100000;
const h = 200000;

function x() {
  let g = 10;
  const h = 20;

  console.log("g : ", g);
  console.log("h : ", h);
}

x();

console.log("g : ", g);
console.log("h : ", h);

var i = 1000000;
var j = 2000000;

{
  let i = 10;
  const j = 20;

  console.log("i : ", i);
  console.log("j : ", j);
}

console.log("i : ", i);
console.log("j : ", j);

let k = 10000000;
const l = 20000000;

{
  // var k = 10;
  // var l = 20;

  console.log("k : ", k);
  console.log("l : ", l);
}

console.log("k : ", k);
console.log("l : ", l);

let m = 100000000;
const n = 200000000;

{
  let m = 10;
  const n = 20;

  console.log("m : ", m);
  console.log("n : ", n);
}

console.log("m : ", m);
console.log("n : ", n);

let o = 100000000;
const p = 200000000;

{
  const o = 20;
  let p = 10;

  console.log("o : ", o);
  console.log("p : ", p);
}

console.log("o : ", o);
console.log("p : ", p);
