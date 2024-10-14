// for (initialization; condition; afterthought) 
//     statement;

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }

    if (i % 2 === 0) {
        console.log(i);
    }

    if (i % 5 === 0) {
        break;
    }
}


// do 
//     statement;
// while (condition);

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

while (condition)
    statement

// let sum = 0;
// let y = 0;
// while(sum < 100){
//     y += 1;
//     sum += y;
// }

console.log(`sum to ${y} is`, sum);

let arr = [1, 2, 3, 4];
let sum = 0;
for (const num of arr) {
    console.log("adding " + num + " to sum");
    sum += num;
}
