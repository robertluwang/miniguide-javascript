## 4. Control Flow

- **Conditional Statements: if, else if, else**
Conditional statements allow you to execute different code blocks based on certain conditions.

```javascript
var age = 18;

if (age >= 18) {
console.log("You're an adult.");
} else if (age >= 13) {
console.log("You're a teenager.");
} else {
console.log("You're a child.");
}
```

- **Switch Statements:**
Switch statements provide an alternative to multiple `if` conditions when you need to compare a single value against multiple possible values.

```javascript
var day = "Wednesday";

switch (day) {
case "Monday":
    console.log("It's the start of the week.");
    break;
case "Wednesday":
    console.log("Halfway through the week.");
    break;
case "Friday":
    console.log("Weekend is almost here.");
    break;
default:
    console.log("It's another day.");
}
```

- **Ternary (Conditional) Operator:**
The ternary operator provides a concise way to write simple conditional expressions.

```javascript
var isRaining = true;
var weatherMessage = isRaining ? "Remember your umbrella." : "Enjoy the weather!";
console.log(weatherMessage);
```



