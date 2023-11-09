// Simple regex pattern matching
const text = "Hello, World!";
const pattern = /World/;
console.log(pattern.test(text)); // Output: true

// Using the RegExp constructor
const pattern2 = new RegExp("Hello");
console.log(pattern2.test(text)); // Output: true

// Matching multiple occurrences
const text2 = "apple, banana, cherry, date";
const pattern3 = /a/g; // 'g' flag matches all occurrences
const matches = text2.match(pattern3);
console.log(matches); // Output: ['a', 'a', 'a']

// Matching any character
const pattern4 = /./g; // '.' matches any character
const allChars = text2.match(pattern4);
console.log(allChars); // Output: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// Matching digits
const pattern5 = /\d/g; // '\d' matches digits
const digits = text2.match(pattern5);
console.log(digits); // Output: null (no digits in this string)

// Matching word characters
const pattern6 = /\w/g; // '\w' matches word characters (alphanumeric)
const wordChars = text2.match(pattern6);
console.log(wordChars); // Output: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

// Matching non-word characters
const pattern7 = /\W/g; // '\W' matches non-word characters (non-alphanumeric)
const nonWordChars = text2.match(pattern7);
console.log(nonWordChars); // Output: [',', ' ', ', ', ' ', ' ']

// Using a custom pattern to match email addresses
const emails = "john@example.com, alice@gmail.com, bob@test.org";
const emailPattern = /\S+@\S+\.\S+/g; // Matches email addresses
const matchedEmails = emails.match(emailPattern);
console.log(matchedEmails); // Output: ['john@example.com', 'alice@gmail.com', 'bob@test.org']
