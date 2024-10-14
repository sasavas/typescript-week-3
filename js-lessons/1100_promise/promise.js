// Basic example of a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        setTimeout(() => {
            const data = { user: "John", age: 30 };
            reject("timeout")
            //resolve(data); // Resolve the promise with the data
        }, 5000);
    });
}

// Using the promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
