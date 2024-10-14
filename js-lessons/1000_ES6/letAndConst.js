/**
 * let and const introduce block-scoped variables (let)
 *  and constants (const), improving upon var for better 
 * control over variable scoping and immutability.
 */

// ES5 with var
var x = 10;
if (true) {
  var x = 20;
}
console.log(x); // Outputs: 20 (variable x is hoisted)

// ES6 with let and const
let y = 10;
const z = 5;
if (true) {
  let y = 20;
  console.log(y); // Outputs: 20 (inner scope)
}
console.log(y); // Outputs: 10 (outer scope)
// z = 7; // Error: Assignment to constant variable

