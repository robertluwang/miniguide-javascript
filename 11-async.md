## 11. Asynchronous JavaScript

- **Introduction to Asynchronous Programming:**
Asynchronous JavaScript allows tasks to be executed independently without blocking the main execution thread. This is particularly important for handling tasks like network requests, file I/O, and timers without freezing the user interface.

- **Callbacks:**
Callbacks are functions passed as arguments to other functions. They are commonly used to handle asynchronous operations, like fetching data from a server.

```javascript
function fetchData(callback) {
// Simulate fetching data from a server
setTimeout(function() {
    var data = "Fetched data";
    callback(data);
}, 1000);
}

fetchData(function(result) {
console.log(result);
});
```

- **Promises:**
Promises provide a more structured and readable way to work with asynchronous code. They represent the eventual completion or failure of an asynchronous operation.

```javascript
function fetchData() {
return new Promise(function(resolve, reject) {
    // Simulate fetching data from a server
    setTimeout(function() {
    var data = "Fetched data";
    resolve(data);
    }, 1000);
});
}

fetchData()
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.error(error);
});
```

- **Async/Await:**
Async/await is a modern approach to handling asynchronous code, making it look more like synchronous code.

```javascript
async function fetchData() {
// Simulate fetching data from a server
return new Promise(function(resolve) {
    setTimeout(function() {
    var data = "Fetched data";
    resolve(data);
    }, 1000);
});
}

async function process() {
try {
    var result = await fetchData();
    console.log(result);
} catch (error) {
    console.error(error);
}
}

process();
```

Here's a complete code example that demonstrates asynchronous programming using both callbacks, promises, and async/await:

async.js

```javascript
// Simulating asynchronous data fetching
function fetchData(callback) {
  setTimeout(function() {
    var data = "Fetched data using callback";
    callback(data);
  }, 1000);
}

// Using Callbacks
fetchData(function(result) {
  console.log(result);
});

// Using Promises
function fetchDataPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var data = "Fetched data using promises";
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

// Using async/await
async function fetchDataAsync() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      var data = "Fetched data using async/await";
      resolve(data);
    }, 1000);
  });
}

(async function() {
  try {
    var result = await fetchDataAsync();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
```

In this example, we simulate data fetching using three different asynchronous approaches: callbacks, promises, and async/await. Each approach achieves the same goal of fetching data asynchronously after a delay of 1 second. The console output will show the fetched data using each method.

run result

```
$node .\async.js
Fetched data using callback
Fetched data using promises
Fetched data using async/await
```



