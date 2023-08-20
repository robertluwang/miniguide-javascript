function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
    }
    
    try {
    var result = divide(10, 0);
    console.log(result);
    } catch (error) {
    console.error("An error occurred:", error.message);
    }