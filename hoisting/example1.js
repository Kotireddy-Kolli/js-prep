/**
 * 1. Scope
 * Is a certain region in a program where a defined variable and functions exist and can be recognized or
 * scope refers to the current context of execution where variables and functions are visible or can be accessed. 
 * Types -> Global scope, functional scope and block scope
 */

// Example: 1

{
    let a = 10;
    const b = 20;
    var c = 30;
}
// output: Error, As let and const are block scope
console.log(a); 
console.log(b);

// output: 30
console.log(c);


// Example: 2

// Global Scope
const globalVar = "I am everywhere";

function scopeExample() {
    // Function Scope
    var functionVar = "I am inside the function";
    
    if (true) {
        // Block Scope
        let blockVar = "I am inside this block";
        var leakedVar = "I ignore blocks!"; // var makes this function-scoped
        
        console.log(blockVar); // Works
    }
    
    // console.log(blockVar); // Throws ReferenceError: blockVar is not defined
    console.log(leakedVar); // Works because var leaked to the function scope
}

scopeExample();
// console.log(functionVar); // Throws ReferenceError: functionVar is not defined

/**
 * 1. Variable shadowing
 * Is a certain region in a prgram where a defined variable exist and can be recognized
 * Types -> Global scope, functional scope and block scope
 */


/**
 * . What is hoisting
 * Hoisting is a JavaScript mechanism where variable, function, and class declarations are conceptualized as being moved to the top of their containing scope before code execution.
 * In reality, the JavaScript engine does not physically move your code. Instead, during the compilation phase, the engine reads your code and sets aside memory space for your declarations before executing any line-by-line operations. 
 * Crucially, only declarations are hoisted; assignments and initializations are not.
 */