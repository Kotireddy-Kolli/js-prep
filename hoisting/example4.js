/**
 * Js execution context
 * JavaScript does not execute your code instantly. It processes every context in two strict phases
 * 
 * 1. Creation Phase (Memory Allocation)
 * Creates the global object (browser: window, node: global)
 * Creates the this object and binds it to the global object
 * Setup memory heap for storing variables and functions references.
 * Variables declared with var are assigned a default placeholder value of undefined (this is the mechanic behind hoisting).
 * Functions are stored in their entirety.
 * Variables declared with let or const are allocated but remain uninitialized in a Temporal Dead Zone (TDZ).
 * The Scope Chain and the value of this are defined.
 * 
 * 2. Execution Phase
 * The engine walks through the code a second time.Code executes sequentially line by line.
 * Variables are updated with their real, assigned values.Functions are invoked, which instantly triggers a new Function Execution Context.
 */

/**
 * Hoisting is a JavaScript mechanism where variable, function, class, or import declarations are conceptually moved 
 * to the top of their containing scope during the compilation phase, before the code is executed
 */

/**
 * TDZ (Temporal Dead Zone) is where variables are in the scope but not yet initialized
 * TDZ (Temporal Dead Zone) is a behavior in JavaScript where variables declared with let and const are in a "dead zone" from the start of the block until the line where they are declared.
 * During this period, any attempt to access these variables will result in a ReferenceError. 
 * This is because, while the variable is hoisted (its memory is allocated), it is not initialized until the declaration line is executed.
 */