function outerFunction() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

const increment = outerFunction();


increment(); // Outputs: 1
increment(); // Outputs: 2
increment(); // Outputs: 3
