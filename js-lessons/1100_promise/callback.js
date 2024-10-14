function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { user: "John", age: 30 };
        callback(data); // Calling the callback function after data is fetched
    }, 2000);
}

// Using the callback
fetchData(function (data) {
    console.log("Data received:", data);
});
