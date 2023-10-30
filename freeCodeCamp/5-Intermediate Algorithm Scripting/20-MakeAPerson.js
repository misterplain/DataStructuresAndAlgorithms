//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.setFirstName = function (first) {
    firstName = first;
  };

  this.setLastName = function (last) {
    lastName = last;
  };

  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  };
};
const personTest = new Person("Bob", "Ross");
console.log(personTest.setFirstName("Haskell"));
console.log(personTest.getFullName());
// console.log(Object.keys(personTest))

//alt method # 1

function Person2(first, last) {
  let firstName = first;
  let lastName = last;

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return firstName;
      },
      set: function (name) {
        firstName = name;
      },
    },
    lastName: {
      get: function () {
        return lastName;
      },
      set: function (name) {
        lastName = name;
      },
    },
    fullName: {
      get: function () {
        return firstName + " " + lastName;
      },
      set: function (name) {
        const parts = name.split(" ");
        if (parts.length === 2) {
          firstName = parts[0];
          lastName = parts[1];
        }
      },
    },
  });
}
