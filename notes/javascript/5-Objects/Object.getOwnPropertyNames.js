// Least Complex: Basic Usage
const simpleObject = { a: 1, b: 2, c: 3 };
const simpleProps = Object.getOwnPropertyNames(simpleObject);
console.log(simpleProps); // Output: [ 'a', 'b', 'c' ]

// Intermediate: Non-Enumerable Properties
const intermediateObject = {};
Object.defineProperty(intermediateObject, 'prop1', {
  value: 'non-enumerable',
  enumerable: false,
});
const intermediateProps = Object.getOwnPropertyNames(intermediateObject);
console.log(intermediateProps); // Output: [ 'prop1' ]

// Most Complex: Prototype Chain and All Properties
function ComplexObject() {
  this.propA = 'A';
}
ComplexObject.prototype.propB = 'B';

const complexInstance = new ComplexObject();
const complexProps = Object.getOwnPropertyNames(complexInstance);

console.log(complexProps); // Output: [ 'propA' ]

// In Summary:
// - `Object.getOwnPropertyNames` returns an array of all property names of an object.
// - It includes both enumerable and non-enumerable properties.
// - It does not include properties from the object's prototype chain.
