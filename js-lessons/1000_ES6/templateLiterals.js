/**
 * Template literals provide a more powerful way to create strings, allowing for embedded expressions, multiline strings, and easier string interpolation using backticks (`).
 */

// ES5 string concatenation
var name = "John";
var greeting = "Hello, " + name + "! How are you?";
console.log(greeting); // Outputs: Hello, John! How are you?

// ES6 template literals
const name = "John";
const greeting = `Hello, ${name}! How\n are you?`;
console.log(greeting); // Outputs: Hello, John! How are you?

// Multiline strings
const multiline = `This is a string
that spans across
multiple lines.`;
console.log(multiline);
/* Outputs:
This is a string
that spans across
multiple lines.
*/
