// JavaScript Getters and Setters in Objects

// Basic Getter and Setter:
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };
  
  console.log(person.fullName); // "John Doe"
  person.fullName = "Alice Johnson";
  console.log(person.firstName); // "Alice"
  console.log(person.lastName); // "Johnson"
  
  // Getters and setters allow you to access and modify object properties with custom behavior.
  
  // Computed Property Names:
  const propertyName = "age";
  
  const student = {
    name: "Alice",
    [propertyName]: 25,
    get [propertyName]() {
      return this[propertyName] || "N/A";
    },
    set [propertyName](value) {
      if (value >= 0) {
        this[propertyName] = value;
      }
    },
  };
  
  console.log(student.age); // 25
  student.age = -5;
  console.log(student.age); // "N/A"
  
  // Getters and setters can have computed property names.
  
  // In Summary:
  // - Getters allow you to define custom behavior when accessing properties.
  // - Setters allow you to define custom behavior when setting properties.
  // - You can use computed property names for dynamic property access.
  // - Getters and setters provide more control over object property behavior.
  