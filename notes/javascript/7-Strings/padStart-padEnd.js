// Using padStart to add leading zeros
const number = "42";
const paddedNumber = number.padStart(5, "0");
console.log(paddedNumber); // Output: "00042"

// Using padEnd to add trailing spaces
const text = "Hello";
const paddedText = text.padEnd(8, " ");
console.log(paddedText); // Output: "Hello   "

// Padding with a custom character
const message = "Message";
const customPaddedMessage = message.padStart(12, "-");
console.log(customPaddedMessage); // Output: "----Message"

// Truncating if the desired length is less than the original string
const longText = "This is a very long sentence.";
const truncatedText = longText.padEnd(10, "...");
console.log(truncatedText); // Output: "This is a very long sentence."

// Padding with an emoji
const emoji = "😃";
const paddedEmoji = emoji.padStart(10, "🚀");
console.log(paddedEmoji); // Output: "🚀🚀🚀🚀🚀🚀🚀😃"
