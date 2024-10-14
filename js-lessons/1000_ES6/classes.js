/**
 * Classes in ES6 provide a more intuitive and syntactically cleaner way to create objects and deal with inheritance, encapsulating methods and properties.
 */

// ES5 function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  var person1 = new Person("John", 30);
  person1.greet(); // Outputs: Hello, my name is John
  
  // ES6 class
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person1 = new Person("John", 30);
  person1.greet(); // Outputs: Hello, my name is John
  
  // Inheritance
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  const student1 = new Student("Alice", 22, "A");
  student1.greet(); // Outputs: Hello, my name is Alice
  student1.study(); // Outputs: Alice is studying.
  