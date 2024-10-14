function validateForm(name, age) {
   
    if (!name) {
        throw new Error("Name is required");
    }
    if (age < 18) {
        throw new Error("Age must be at least 18");
    }
    return "Form is valid";
}

try {
    const formStatus = validateForm("", 16);
    console.log(formStatus);
} catch (error) {
    console.error("Form Error:", error.message);
}
