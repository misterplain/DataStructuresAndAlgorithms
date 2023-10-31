//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  //test, contains 10 or 11 numbers and spaces, hyphens, and parenthesis
  const regex = /^(?=(?:[^0-9]*[0-9]){10,11}[^0-9]*$)[0-9\s\-()]+$/;

  //initial check if is valid phone number
  if (!regex.test(str)) {
    return false;
  }

  //if there is a 1 and there are 9 other numbers
  //reduce all to numbers
  const onlyNumbers = str.replace(/[^0-9]/g, "");
  const restOfPhoneNumber = onlyNumbers.slice(1);
  if (onlyNumbers[0] !== "1") {
    return false;
  }
  if (restOfPhoneNumber.length !== 10) {
    return false;
  }

  //loop through valid string to deterime passability
  console.log(str);

  return true;
}

console.log(telephoneCheck("1555-555-5555"));
