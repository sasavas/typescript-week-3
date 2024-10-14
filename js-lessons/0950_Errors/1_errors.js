/** Syntax Errors:
* Occur when there is a mistake in the code syntax. */
console.log("Hello, world!")  // Missing closing quote causes a syntax error

/** 
 * Runtime Errors:
 * Occur when the code is syntactically correct but fails during execution.
 */    
const user = null;
console.log(user.name); // This will cause a TypeError: Cannot read property 'name' of null

/** Logical Errors:
* The code runs without throwing errors but doesn’t produce the expected results.
*/
const sum = 5 + "5"; // Results in "55" instead of 10 because of type coercion 