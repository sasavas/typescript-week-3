
// const age = 19;

// const canVote2 = age >= 18 ? 'Yes' : 'No';

// let canVote = '';

// if(age >= 18){
//     canVote = 'Yes'
// } else {
//     canVote = 'No';
// }


// // Map function

// // const numbers = [1, 2, 3, 4];
// // const squaredNumbers: number[] = [];

// // for (let num of numbers) {
// //   squaredNumbers.push(num * num);
// // }

// // console.log(squaredNumbers); // Output: [1, 4, 9, 16]


// // // 
// // const squaredNumbersMap = numbers.map((num) => num * num);

// // console.log(numbers.map((num) => num * num));




// // FILTER



// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers: number[] = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers); // Output: [2, 4]

// ;

// console.log(numbers.filter(num => num % 2 === 0)); // Output: [2, 4]





const person = { name: 'Alp', age: 30, city: 'Bursa' };

const { name, ...rest } = person;

console.log(name); 
console.log(rest);


const person2 = { ...person, name: '' }


export {}