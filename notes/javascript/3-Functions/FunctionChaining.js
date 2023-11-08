// Function Chaining in JavaScript

// Basic Function Chaining:
const calculator = {
    value: 0,
    
    add(num) {
      this.value += num;
      return this; // Return the calculator object for chaining
    },
    
    subtract(num) {
      this.value -= num;
      return this;
    },
    
    multiply(num) {
      this.value *= num;
      return this;
    },
    
    divide(num) {
      this.value /= num;
      return this;
    },
  };
  
  const result = calculator
    .add(5)
    .subtract(2)
    .multiply(3)
    .divide(2)
    .value;
  
  console.log(`Result: ${result}`); // Output: "Result: 9"
  
  // In this example, each method returns the calculator object, allowing method chaining.
  
  // Chaining with jQuery (Library Example):
  // Assume jQuery is included in your HTML file
  
  // Select an element and change its attributes in a chain.
  $("#myElement")
    .addClass("highlight")
    .css("color", "blue")
    .fadeOut(1000);
  
  // You can chain jQuery methods to manipulate DOM elements.
  
  // Chaining with Promises:
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data); // Output: "Data received"
      return "Processed data";
    })
    .then(processedData => {
      console.log(processedData); // Output: "Processed data"
    });
  
  // Promises allow you to chain asynchronous operations.
  
  // In Summary:
  // - Function chaining involves calling multiple methods on an object one after the other.
  // - Each method typically returns the object itself (or a new object) to enable further chaining.
  // - Function chaining is commonly used with libraries like jQuery and for building fluent interfaces.
  