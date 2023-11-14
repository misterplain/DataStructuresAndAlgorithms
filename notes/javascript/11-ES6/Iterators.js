// Use Case 1: Creating an Iterable Object
const fruits = ["apple", "banana", "cherry"];

// Use Case 2: Using a for...of Loop to Iterate
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

// Use Case 3: Iterating Over a String
const text = "Hello";
for (const char of text) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o

// Use Case 4: Custom Iterable Object
const iterableObject = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const item of iterableObject) {
  console.log(item);
}
// Output:
// 1
// 2
// 3

// Use Case 5: Using the Spread Operator
const numbers = [10, 20, 30];
const spreadNumbers = [...numbers];
console.log(spreadNumbers); // Output: [10, 20, 30]

// In Summary:
// - Iterators allow you to loop through iterable objects like arrays, strings, or custom objects.
// - The for...of loop simplifies iteration over iterable objects.
// - You can create custom iterable objects by defining a `[Symbol.iterator]` method.
// - The spread operator (`...`) can be used to create new arrays or objects from iterables.
