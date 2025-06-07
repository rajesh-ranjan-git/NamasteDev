var a = 10;

function b() {
  var x = 100;
}

console.log("this : ", this);
console.log("window : ", window);
console.log("this === window : ", this === window);

console.log("a : ", a);
console.log("window.a : ", window.a);
console.log("this.a : ", this.a);
