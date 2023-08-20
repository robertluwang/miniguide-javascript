## 10. Error Handling

- **Try...Catch Statements:**
JavaScript provides a mechanism to handle errors gracefully using `try` and `catch` blocks.

```javascript
try {
// Code that might throw an error
var result = 10 / 0; // Division by zero
console.log(result);
} catch (error) {
// Code to handle the error
console.error("An error occurred:", error.message);
}
```
run result
```
$node try1.js
Infinity
```

- **Throwing Custom Errors:**
You can also create and throw custom errors to handle specific situations.

```javascript
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
```
run result
```
$node try2.js
An error occurred: Division by zero is not allowed.
```



