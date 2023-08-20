## 12. Basic Input/Output

- **Displaying Output with `console.log()`:**
The `console.log()` function is used to output data to the browser's console for debugging and logging purposes.

```javascript
console.log("Hello, world!");
```

- **Getting Input with `prompt()`:**
The `prompt()` function displays a dialog box that allows the user to input data, which can then be captured and used in your code.

```javascript
var name = prompt("Enter your name:");
console.log("Hello, " + name + "!");
```

- **HTML Input Elements:**
In a web page, you can use HTML input elements like text fields, buttons, and forms to interact with users and get input.

```html
<!-- HTML -->
<input type="text" id="nameInput">
<button id="submitButton">Submit</button>
<p id="output"></p>
```

```javascript
// JavaScript
var nameInput = document.getElementById("nameInput");
var submitButton = document.getElementById("submitButton");
var output = document.getElementById("output");

submitButton.addEventListener("click", function() {
var name = nameInput.value;
output.textContent = "Hello, " + name + "!";
});
```



