// Local Storage and Session Storage are two web storage mechanisms in JavaScript for storing data on the client side.

// **Example 1: Storing and Retrieving Data in Local Storage**
// Using local storage to store and retrieve simple data.

// Storing data in local storage
localStorage.setItem("username", "John");

// Retrieving data from local storage
const storedUsername = localStorage.getItem("username");
console.log(`Username: ${storedUsername}`);

// Output:
// Username: John

// Explanation: Data is stored and retrieved using the `localStorage` object. Data persists even after the browser is closed.

// **Example 2: Storing and Retrieving Objects in Local Storage**
// Storing and retrieving objects in local storage.

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// Storing the object in local storage after converting it to a JSON string
localStorage.setItem("user", JSON.stringify(user));

// Retrieving and parsing the JSON string back to an object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Alice

// Explanation: Objects can be stored in local storage after serializing to JSON format.

// **Example 3: Session Storage**
// Using session storage to store temporary data.

// Storing data in session storage
sessionStorage.setItem("token", "abc123");

// Retrieving data from session storage
const sessionToken = sessionStorage.getItem("token");
console.log(`Session Token: ${sessionToken}`);

// Output:
// Session Token: abc123

// Explanation: Session storage is similar to local storage but data is cleared when the session ends (e.g., when the browser is closed).

// In Summary:
// - Local Storage and Session Storage provide client-side data storage.
// - Local Storage persists data even after the browser is closed, while Session Storage is cleared when the session ends.
// - Data can be stored and retrieved as strings, including JSON-formatted objects.
