/**
 * What is variable shadowing?
 * Variable shadowing occurs in JavaScript when a variable declared within an inner scope (like a function or a block) 
 * has the exact same name as a variable declared in an outer scope. 
 * When this happens, the inner variable temporarily overrides and hides the outer variable, 
 * making it completely inaccessible within that inner scope.
 * 
 * How Shadowing Works
 * When JavaScript looks for a variable, it starts at the innermost scope and searches outward. 
 * If it finds the variable name in the inner scope first, it uses that value and stops searching, 
 * meaning the outer variable is effectively hidden in the "shadow" of the inner one
 */

// Example: 1
// Outer / Global scope
let user = "Alice"; 

if (true) {
    // Inner scope shadows 'user'
    let user = "Bob"; 
    console.log(user); // Output: "Bob" (inner variable takes precedence)
}

console.log(user); // Output: "Alice" (outer variable remains unchanged)

/**
 * Types of Variable Shadowing
 * Block-Level Shadowing: Occurs inside conditional blocks (if, else), loops, or switch statements using let or const.
 * Function-Level Shadowing: Occurs when a variable declared inside a function shadows a global variable.
 * Parameter Shadowing: Happens when a function parameter shares the same name as an outer scope variable.
 */

/**
 * Legal vs. Illegal Shadowing
 * While shadowing is a normal language feature, JavaScript has strict rules about 
 * how you combine variable declarations (var, let, and const) across nested scopes
 */

/**
 * 1. Legal ShadowingYou can freely shadow an outer variable using let or const inside a block scope.
 * You can also shadow an outer var with an inner var inside a function scope
 */
var a = 10;
{
    let a = 11; // Perfectly legal
    console.log(a);
}
console.log(a);

var b = 20;
{
    const b = 22; // Perfectly legal
    console.log(b);
}
console.log(b);

let c = 30;
{
    let c = 33; // Perfectly legal
    console.log(c);
}
console.log(c);

let d = 40;
{
    const d = 44; // Perfectly legal
    console.log(d);
}
console.log(d);

const e = 50;
{
    let e = 55; // Perfectly legal
    console.log(e);
}
console.log(e);

const f = 60;
{
    const f = 66; // Perfectly legal
    console.log(f);
}
console.log(f);

/**
 * 2. Illegal ShadowingIf you declare a variable in an outer scope using let or const, 
 * you cannot shadow it using the var keyword inside an inner block scope. 
 * Because var is function-scoped (or global) rather than block-scoped, 
 * it attempts to inject itself into the outer scope where that variable name already exists, resulting in a SyntaxError
 */
let active = true;

if (true) {
    var active = false; // ❌ Uncaught SyntaxError: Identifier 'active' has already been declared
}

/**
 * Best Practice: Many production setups utilize static analysis tools like ESLint
 * with the no-shadow rule turned on to flag and prevent accidental shadowing entirely.
 */