var name = "Namaste Node JS";
var a = 10;
var b = 10;

console.log(name);
console.log(a + b);

// console.log(window); // window is only available on web and not provided by Node JS, instead Node JS provides global, with NOde JS we will get ReferenceError : window is not defined
console.log(this); // With browsers it gives the global object window but with Node JS it gives an empty object and not window or global
// console.log(self); // With browsers it gives the global object window but with Node JS it throws ReferenceError : self is not defined
// console.log(frames); // With browsers it gives the global object window but with Node JS it throws ReferenceError : frames is not defined

console.log(global); // With Node JS it points to global object but with browsers it throws ReferenceError : global is not defined
console.log(globalThis); // global and globalThis points to the same global object provided by Node JS. globalThis is a standard that was proposed for all the JS Runtime environments to follow instead of global to support the applications created before this standard (global may have been used for something else in their application and the code will break). Be it Chrome's V8 Engine, Firefox's SpiderMonkey, Edge's Chakra etc all the JS Runtime Environment supports this standard now.
console.log(global === globalThis); // In Node JS this will result to true
