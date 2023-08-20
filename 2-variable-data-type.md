## 2. Variables and Data Types

**Variables and Their Declaration:**
Variables are used to store and manage data in JavaScript. They act as placeholders for values that can change over time. To declare a variable, you use the `var`, `let`, or `const` keyword followed by the variable name. The difference between them lies in their scope and mutability:

```javascript
var age;      // Declaring a variable named 'age' using 'var'
let name;     // Declaring a variable named 'name' using 'let'
const pi = 3.14; // Declaring a constant variable named 'pi' using 'const'
```

**Data Types:**
JavaScript has several built-in data types that determine the kind of value a variable can hold. The common data types include:

- **Numbers:** Represents numeric values, both integers and floating-point numbers.
- **Strings:** Represents sequences of characters, enclosed in single ('') or double ("") quotes.
- **Booleans:** Represents either `true` or `false`.
- **Null:** Represents an intentional absence of any value.
- **Undefined:** Represents an uninitialized variable or missing property.
- **Objects:** Represents complex data structures, including arrays, functions, and more.
- **Arrays:** Represents ordered collections of values.

**Variable Naming Conventions:**
When naming variables, it's important to follow certain naming conventions to make your code more readable and maintainable:

- Variable names can contain letters, digits, underscores (_), or dollar signs ($).
- They must start with a letter, underscore, or dollar sign.
- Variable names are case-sensitive (`myVar` and `myvar` are considered different variables).
- Use meaningful names that reflect the purpose of the variable.
- Avoid using reserved words like `var`, `let`, `const`, `if`, `while`, etc.

```javascript
let firstName = "John";   // Good variable name: descriptive and follows conventions
let num1 = 10;            // Less descriptive variable name
let $price = 19.99;       // Variable name starts with a dollar sign
let _counter = 0;         // Variable name starts with an underscore
```

Here is demo to cover all data types:

```javascript
// Numbers
var age = 25;
var price = 9.99;

// Strings
var name = "Alice";
var message = 'Hello, world!';

// Booleans
var isActive = true;
var isStudent = false;

// Null and Undefined
var emptyValue = null;       // Represents intentional absence of value
var undefinedValue;          // Represents uninitialized variable

// Objects
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};

// Arrays
var colors = ["red", "green", "blue"];
var numbers = [1, 2, 3, 4, 5];

console.log("Age:", age);
console.log("Price:", price);

console.log("Name:", name);
console.log("Message:", message);

console.log("isActive:", isActive);
console.log("isStudent:", isStudent);

console.log("Empty Value:", emptyValue);
console.log("Undefined Value:", undefinedValue);

console.log("Person:", person);

console.log("Colors:", colors);
console.log("Numbers:", numbers);
```

run above demo in cli,
```javascript
node .\data-type.js
Age: 25
Price: 9.99
Name: Alice
Message: Hello, world!
isActive: true
isStudent: false
Empty Value: null
Undefined Value: undefined
Person: { firstName: 'John', lastName: 'Doe', age: 30, isStudent: false }
Colors: [ 'red', 'green', 'blue' ]
Numbers: [ 1, 2, 3, 4, 5 ]
```



