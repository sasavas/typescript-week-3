function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();



console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.decrement()); // Outputs: 1
console.log(counter.reset());     // Outputs: 0
