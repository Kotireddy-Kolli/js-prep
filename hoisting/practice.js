// Phase 1: The Basics (var vs. Functions)
// These test the fundamental difference between how variables declared with var and function declarations are hoisted.

// Problem 1: The Classic Mix

console.log(myVar);
console.log(myFunc);

var myVar = "Hello";
function myFunc() {
  return "World";
}
// Problem 2: The Double Declaration
// What happens when a variable and a function share the exact same name?

var test = 10;

function test() {
  console.log("I am a function");
}

console.log(typeof test);

// Phase 2: The Temporal Dead Zone (let & const)
// let and const are hoisted, but they behave very differently from var. Let's see if you can spot the Temporal Dead Zone (TDZ).

// Problem 3: The Block Trap

let x = 1;

{
//   console.log(x);
  let x = 2;
}

// Problem 4: Functions vs. Expressions
// Does hoisting apply to functions assigned to let or const variables?

hello();
// arrowFunc();

function hello() {
  console.log("Hello!");
}

const arrowFunc = () => {
  console.log("Hi!");
};

// Phase 3: Shadowing and Function Scopes
// This is where interviews usually get tricky. Pay close attention to execution order and local vs. global execution contexts.

// Problem 5: Inside the House

var a = 1;

func();

function func() {
  console.log(a);
  var a = 2;
}

// Problem 6: The Argument Clash
// What happens when a hoisted function meets a function argument?

function siblingClash(x) {
  console.log(x);
  
  var x = 20;
  
  function x() {}
  
  console.log(x);
}

siblingClash(10);

// Phase 4: Extreme Mode (Edge Cases)
// If you can get these right, you genuinely understand JavaScript's parsing phase.

// Problem 7: Conditional Hoisting
// Does the JavaScript engine look inside if blocks during the compilation phase?

console.log(foo);

if (false) {
  var foo = "Hidden?";
}

// Problem 8: The Loop Shenanigans

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1);
}
/** 💡 Pro-Tip for Solving These:
Whenever you look at a piece of JS code, mentally split it into two phases just like the JS Engine does:

Compilation Phase: Look for var, let, const, and function keywords. "Hoist" them to the top of their respective scopes (initializing var as undefined, and leaving let/const uninitialized in the TDZ).

Execution Phase: Run the code line-by-line from top to bottom, assigning values and executing functions. */


/**
 * Phase 1: The Creation (Compilation) Phase
When the JS engine parses this scope, it sees two things named test: a var test and a function test() {}.

Here is the golden rule of hoisting priority: Function declarations are hoisted before variable declarations. If a variable declaration (var) shares the same name as a function declaration, the variable declaration is essentially ignored during this phase because the identifier test is already bound to the function.

So, at the end of the creation phase, the scope looks like this:

test is pointing to the function function test() { ... }.

(The var test line did not overwrite it because JS engine sees "Ah, test is already defined as a function, I don't need to initialize it to undefined.")

Phase 2: The Execution Phase
Now, the engine runs the code line-by-line:

Line 1: test = 10;

Wait, what? Yes! Even though the original code said var test = 10;, the compilation phase already handled the var part. During execution, this line is treated strictly as an assignment: “Assign the value 10 to the variable test.”

This completely overwrites the function pointer. test is now the number 10.

Line 3-5: The engine skips past the function test() {} declaration block because it already processed it during Phase 1.

Line 7: console.log(typeof test);

Since test was reassigned to 10 on line 1, its type is now "number".

Output of Problem 2: "number"
 */

/**
 * Deep Dive: Problem 6 (The Argument Clash)This one is a classic, advanced interview question. Here is the code:JavaScriptfunction siblingClash(x) {
  console.log(x);
  
  var x = 20;
  
  function x() {}
  
  console.log(x);
}

siblingClash(10);
To solve this, you need to know one more rule: Function arguments are initialized before any local variables or functions inside the function body are processed.
Let's watch how the JS engine executes siblingClash(10) step-by-step.
Phase 1: The Creation (Compilation) Phase (Inside the Function)When siblingClash(10) is invoked, a new execution context is created. 
The engine parses the inside of the function:Arguments are bound: The parameter x is assigned the passed value of 10.
At this micro-second: x = 10.Function declarations are hoisted: The engine sees function x() {}. 
Because function hoisting takes high priority, it binds the identifier x to this function. 
This overwrites the argument 10.At this micro-second: x = function x() {}.Variable declarations are hoisted: 
The engine sees var x. But wait! x is already defined in this scope (as a function). 
Therefore, the duplicate declaration var x is ignored.By the end of the creation phase, 
before a single line of code actually executes:The identifier x holds the function function x() {}.
Phase 2: The Execution PhaseNow, the engine executes the code line-by-line:
Line 2: console.log(x);What does x hold right now? The function!Prints: [Function: x]
Line 4: var x = 20;Just like in Problem 2, the var declaration was already handled. 
This line is executed purely as an assignment: “Assign the value 20 to x.”The function pointer is overwritten. 
x is now 20.
Line 6: function x() {}Skipped (already processed in compilation).
Line 8: console.log(x);x was overwritten to 20 on line 4.Prints: 20
Output of Problem 6:[Function: x]20Summary of the "Mental Rules" to RememberTo never get these wrong again, 
keep these three priority rules in your back pocket:The Priority Order of Hoisting/Initialization:
$$\text{Function Parameters} => \text{Function Declarations} => \text{Variable Declarations (var)}
$$Duplicate var declarations are ignored during compilation if the variable name already exists as a parameter or hoisted function.
During the execution phase, var x = y behaves purely as an assignment (x = y), which will happily overwrite whatever was hoisted there previously.
 */