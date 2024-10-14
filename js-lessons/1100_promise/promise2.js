function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        setTimeout(() => {
            const data = { user: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        console.log("Processing data...");
        setTimeout(() => {
            if (data.age > 25) {
                resolve({ ...data, status: "Processed" });
            } else {
                reject("User is too young to process");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        return processData(data);
    })
    .then((processedData) => {
        console.log("Data processed:", processedData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
