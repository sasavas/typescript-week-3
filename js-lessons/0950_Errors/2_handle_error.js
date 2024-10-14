try {
    const user = null;
    console.log(user.name); // This will throw a TypeError
} catch (error) {
    console.log("An error occurred:", error.message); // Handles the error
}