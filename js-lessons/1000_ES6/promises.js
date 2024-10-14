/**
 * Promises provide a cleaner, more robust way to handle asynchronous operations compared to callbacks, allowing chaining and better error handling.
 */

// ES5 with callbacks
function asyncOperation(callback) {
    setTimeout(function () {
        callback("Data received");
    }, 1000);
}

asyncOperation(function (data) {
    console.log(data); // Outputs: Data received
});

// ES6 with Promises
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

asyncOperation()
    .then((data) => {
        console.log(data); // Outputs: Data received
    })
    .catch((error) => {
        console.error(error);
    });

// Async/Await (ES2017 but closely related)
async function fetchData() {
    try {
        const data = await asyncOperation();
        console.log(data); // Outputs: Data received
    } catch (error) {
        console.error(error);
    }
}

fetchData();
