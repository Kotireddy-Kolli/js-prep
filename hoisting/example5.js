
if (true) {
    function f1() {
        console.log("Inside function f1, f2")
    }
}
f1();

// Functions are hoisted to the top of their scope, but in this case, 
// f3 is defined inside f2 and is not accessible outside of it. 
// Therefore, calling f3() outside of f2 results in a ReferenceError.

// Functions are function-scoped, meaning they are only accessible within the function they are defined in.
function f2() {
    function f3() {
        console.log("Inside function f1, f2")
    }
}
f3(); // ReferenceError: f3 is not defined