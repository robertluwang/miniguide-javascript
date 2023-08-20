## 9. Working with the Document Object Model (DOM)

- **Accessing and Modifying Elements:**
The Document Object Model (DOM) represents the structure of an HTML document as a tree of objects. JavaScript can be used to access and manipulate these objects.

dom-hello.html
```html
<div id="myDiv">Hello, World!</div>
<script src="dom-hello.js"></script>
```
dom-hello.js
```javascript
var myElement = document.getElementById("myDiv");
myElement.textContent = "Hello, DOM!";
```
We also can change dom interactively from browser developer console.
```
>var myElement = document.getElementById("myDiv");
undefined
>console.log(myElement)
    <div id=​"myDiv">​Hello, DOM!​</div>​
>console.log(myElement.textContent)
Hello, DOM!
>myElement.textContent = "Hello, DOM world!";
'Hello, DOM world!'
t>console.log(myElement.textContent)
Hello, DOM world!
```

- **Event Handling: Adding Event Listeners:**
You can make web pages interactive by responding to user actions using event listeners.

button.html

```html
<!-- HTML -->
<button id="myButton">Click Me</button>
<script src="button.js"></script>
```
button.js
```javascript
var button = document.getElementById("myButton");

button.addEventListener("click", function() {
alert("Button clicked!");
});
```

- **Changing CSS Styles Dynamically:**
JavaScript can be used to manipulate CSS styles of HTML elements dynamically.

css.html
```html
<div id="myDiv" class="box">Styled Div</div>
<script src="css.js"></script>
```
css.js
```javaScript
var myDiv = document.getElementById("myDiv");

myDiv.style.backgroundColor = "orange";
myDiv.style.color = "white";
```

- **Creating and Modifying Elements:**
JavaScript allows you to create new HTML elements and add them to the DOM.

p.html
```html
<div id="container">container</div>

<script src="p.js"></script>
```
p.js
```javascript
var newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

var container = document.getElementById("container");
container.appendChild(newParagraph);
```



