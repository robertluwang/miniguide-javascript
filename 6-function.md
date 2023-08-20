## 6. Functions

- **Function Declaration and Invocation:**
Functions are blocks of code that can be defined and called to perform specific tasks.

```javascript
// Function declaration
function greet(name) {
console.log("Hello, " + name + "!");
}

// Function invocation
greet("Alice");
```

- **Parameters and Arguments:**
Functions can accept parameters (inputs) and return results (outputs).

```javascript
function addNumbers(a, b) {
return a + b;
}

var sum = addNumbers(5, 7); // 12
```

- **Return Statement:**
The `return` statement specifies the value a function should return when called.

```javascript
function square(num) {
return num * num;
}

var squaredValue = square(4); // 16
```

- **Scope and Closures:**
Functions have their own scope, and variables declared within a function are local to that function. Closures allow functions to "remember" variables from their containing scope.

```javascript
function outer() {
var outerVar = "I'm from outer scope";

function inner() {
    console.log(outerVar); // Can access outerVar due to closure
}

return inner;
}

var innerFunction = outer();
innerFunction(); // Outputs: "I'm from outer scope"
```



