try {
// Code that might throw an error
var result = 10 / 0; // Division by zero
console.log(result);
} catch (error) {
// Code to handle the error
console.error("An error occurred:", error.message);
}