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