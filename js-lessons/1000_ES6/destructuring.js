/**
 * Destructuring assignment allows for extracting values from arrays or properties from objects into distinct variables in a concise manner.
 */

// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Outputs: 1 2 3

// Object destructuring
const mustafa = {
  name: "Mustafa",
  age: 25,
  city: "Yozgat"
};

console.log(
  mustafa.name + " " + mustafa.age + " yasinda " + mustafa.city + " dan katilitorum")

const { name, age, city } = mustafa;
console.log(name, age, city);
console.log(
  name + " " + age + " yasinda " + city + " dan katilitorum")


// Default values and renaming
const { name: personName, age: personAge, country = "Turkiye" } = mustafa;
console.log(personName, personAge, country);
