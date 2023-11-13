// Use Case 1: Creating a Date Object
const currentDate = new Date();
console.log(currentDate);
// Output: Fri Nov 03 2023 12:34:56 GMT+0000 (Coordinated Universal Time)
// A Date object represents a specific date and time.

// Use Case 2: Parsing a Date String
const dateString = "2023-11-03T08:30:00";
const parsedDate = new Date(dateString);
console.log(parsedDate);
// Output: Fri Nov 03 2023 08:30:00 GMT+0000 (Coordinated Universal Time)
// You can create a Date object by parsing a date string.

// Use Case 3: Getting Date Components
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based index (0 = January)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(year, month, day, hours, minutes, seconds);
// Output: 2023 10 3 12 34 56
// You can extract various components (year, month, day, etc.) from a Date object.

// Use Case 4: Formatting Dates
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);
console.log(formattedDate);
// Output: "November 3, 2023"
// You can format a Date object as a human-readable string.

// Use Case 5: Performing Date Arithmetic
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 7);
console.log(futureDate);
// Output: Fri Nov 10 2023 12:34:56 GMT+0000 (Coordinated Universal Time)
// You can perform arithmetic operations on Date objects.

// Use Case 6: Comparing Dates
const pastDate = new Date("2023-10-01");
if (currentDate > pastDate) {
  console.log("Current date is later than the past date.");
} else {
  console.log("Past date is later than the current date.");
}
// You can compare Date objects to determine their relative order.

// In Summary:
// - The Date object in JavaScript represents date and time.
// - It can be created with the current date/time, from a date string, or specific date components.
// - You can extract date components and format dates for display.
// - Date objects support date arithmetic and comparisons.
