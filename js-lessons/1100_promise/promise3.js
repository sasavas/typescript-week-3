function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        setTimeout(() => {
            const data = { sensorName: "humidity", value: 45 };
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        console.log("Processing data...");
        setTimeout(() => {
            if (data.value > 40) {
                resolve({ ...data, status: "Alarm. humidity is above 40" });
            } else {
                reject("User is too young to process");
            }
        }, 2000);
    });
}

async function fetchAndProcess(){
    try {
        var data = await fetchData();
        var result = await processData(data); 
        console.log("Process result", result);
    } catch (error) {
        console.error("error");
    }
}

fetchAndProcess();
