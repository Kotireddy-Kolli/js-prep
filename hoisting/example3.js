// Declaration without initializing a variables

var a;
let b;
// const c; // Gives SyntaxError: Missing initializer in const declaration
const d = 10; // Works fine

// Initialization of variables

var e = 10;
e=11;
let f = 20;
f=21;
const g = 30; 
// g=31; // This would cause a TypeError: Assignment to constant variable.