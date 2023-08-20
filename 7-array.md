## 7. Arrays

- **Creating and Initializing Arrays:**
Arrays are ordered collections of values that can hold different data types.

```javascript
var numbers = [1, 2, 3, 4, 5];
var colors = ["red", "green", "blue"];
var mixedArray = [1, "hello", true];
```

- **Accessing Array Elements:**
Array elements are accessed using their index, starting from 0.

```javascript
var fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
```

- **Modifying Arrays:**
Arrays can be modified by assigning new values to specific indices.

```javascript
var animals = ["dog", "cat", "rabbit"];
animals[1] = "elephant"; // Modify the second element
```

- **Array Methods:**
JavaScript provides built-in methods to manipulate arrays efficiently.

```javascript
var numbers = [3, 1, 4, 1, 5, 9];

numbers.push(2); // Add an element to the end
numbers.pop();   // Remove the last element
numbers.shift(); // Remove the first element
numbers.unshift(8); // Add an element to the beginning
numbers.splice(2, 1); // Remove one element at index 2
```



