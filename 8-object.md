## 8. Objects

- **Creating Objects:**
Objects are complex data structures that allow you to group related data and functionality together.

```javascript
var person = {
firstName: "John",
lastName: "Doe",
age: 30,
isStudent: false
};
```

- **Adding and Accessing Object Properties:**
Object properties are accessed using dot notation or bracket notation.

```javascript
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
```

- **Methods within Objects:**
Objects can contain functions as properties, known as methods.

```javascript
var calculator = {
add: function(a, b) {
    return a + b;
},
subtract: function(a, b) {
    return a - b;
}
};

var sum = calculator.add(5, 3); // 8
var difference = calculator.subtract(10, 4); // 6
```

- **Object-Oriented Programming Basics:**
Objects and classes are foundational concepts in object-oriented programming (OOP).

```javascript
// Constructor function
function Car(make, model) {
this.make = make;
this.model = model;
}

// Creating an instance of Car
var myCar = new Car("Toyota", "Camry");
console.log(myCar.make); // "Toyota"
```



