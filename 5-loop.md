## 5. Loops

- **for Loop:**
The `for` loop is used to execute a block of code repeatedly for a specified number of iterations.

```javascript
for (var i = 0; i < 5; i++) {
console.log("Iteration: " + i);
}
```

- **while Loop:**
The `while` loop continues executing a block of code as long as a specified condition is true.

```javascript
var count = 0;

while (count < 3) {
console.log("Count: " + count);
count++;
}
```

- **do-while Loop:**
The `do-while` loop is similar to the `while` loop, but it ensures the code block is executed at least once before checking the condition.

```javascript
var x = 0;

do {
console.log("Value of x: " + x);
x++;
} while (x < 3);
```

- **break and continue Statements:**
The `break` statement is used to exit a loop prematurely, while the `continue` statement skips the current iteration and moves to the next.

```javascript
for (var i = 0; i < 5; i++) {
if (i === 3) {
    break; // Exit the loop when i is 3
}
console.log("Iteration: " + i);
}

for (var j = 0; j < 5; j++) {
if (j === 2) {
    continue; // Skip iteration when j is 2
}
console.log("Iteration: " + j);
}
```



