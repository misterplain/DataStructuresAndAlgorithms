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
  //   console.log(str);

  let countryCode = [];
  let areaCode = [];
  let centOfficeCode = [];
  let lineNumber = [];

  //use a while loop to basically cut off chunks of the string to be pushed to the array

  for (let i = 0; i < str.length; i++) {
    //check for 1, if total length of just numbers is 11 and str[0] === "1", countryCode.push(str[i]) as normal, i++ to get to next characted

    if (str[i] === "1") {
      countryCode.push(str[0]);
      continue;
    }
    //if next char is (, it MUST have a ) at i+4, if not return false. If true push str[i] to str[i+4] and rather than slice the string, set i to i+5 so that it skips over the iterations in the middle
    //only access if areaCode.length >= 1
    if (countryCode.length === 1 && areaCode.length < 1) {
      let slicedFromHere = str.slice(i);
      console.log("*" + slicedFromHere + "*" + " areaCode sliced From here");
      if (str[i] === "(") {
        if (str[i + 4] === ")") {
          console.log("format is '(555)'");
          areaCode.push(str.slice(i, i + 5));
          i += 5;
        } else {
          // Invalid format
          return false;
        }
      } else if (str[i] === " ") {
        if (
          !isNaN(str[i + 1]) &&
          !isNaN(str[i + 2]) &&
          !isNaN(str[i + 3]) &&
          !isNaN(str[i + 4])
        ) {
          console.log("format is ' 555'");
          areaCode.push(str.slice(i, i + 4));
          i += 4;
        } else if (
          str[i + 1] === "(" &&
          str[i + 5] === ")" &&
          str[i + 6] === " "
        ) {
          // Format is " (555) "
          console.log("format is (555)");
          areaCode.push(str.slice(i, i + 7));
          i += 7;
        } else if (str[i + 4] === " ") {
          console.log("format is  ' 555 ' ");
          areaCode.push(str.slice(i, i + 5));
          i += 5;
        } else if (!isNaN(str[i + 4]) || str[i + 4] === "-") {
          areaCode.push(str.slice(i, i + 4));
          i += 4;
        } else {
          console.log("invalid format from areaCode");
          return false;
          // Invalid format
        }
      } else if (!isNaN(str[i])) {
        console.log("format is '555' ");
        areaCode.push(str.slice(i, i + 3));
        i += 3;
      } else {
        return false;
      }
    }

    if (areaCode.length === 1 && centOfficeCode.length < 1) {
      // console.log(str[i])
      let slicedFromHere = str.slice(i);
      console.log(
        "*" + slicedFromHere + "*" + " centOfficeCode sliced From here"
      );
      let lengthAreaCode = areaCode[0];
      let areaCodeLastChar = lengthAreaCode[lengthAreaCode.length - 1];

      //if i is hyphen and last char of areaCode is space or parenthesis, return false
      if (str[i] === "-") {
        if (areaCodeLastChar === " " || areaCodeLastChar === ")") {
          console.log(
            "false, centOffice start with hyphen and areaCode ends with space or parenthesis "
          );
          return false;
        } //if i is hyphen and i=4 is a hypen, push to centOfficeCode
        else if (str[i + 4] === "-") {
          centOfficeCode.push(str.slice(i, i + 5));
          i += 5;
        } else {
          console.log("invalid format");
        }
      }

      ///
      else if (!isNaN(str[i]) && !isNaN(str[i + 1]) && !isNaN(str[i + 2])) {
        centOfficeCode.push(str.slice(i, i + 3));
        i += 3;
      }
      ///
      else if (!isNaN(str[i])) {
        if (str[i + 4] === "-" || str[i + 4] === " ") {
          centOfficeCode.push(str.slice(i, i + 4));
          i += 4;
        }
      }
      //if i is a number and i+4 is hyphen or space, push those 4 items
    }

    //same thing for phone and number
  }

  console.log({
    str,
    countryCode,
    areaCode,
    centOfficeCode,
    lineNumber,
  });
}

telephoneCheck("1 555-555-5555");

// while (str.length) {
//     // let currentChar = str[0];
//     // console.log(parseInt(currentChar, 10));
//     // console.log(str);
//     // console.log(onlyNumbers.length)
//     // if (onlyNumbers[0] === "1" && countryCode.length !== 1) {
//     //   countryCode.push(currentChar);
//     //   str = str.slice(1);
//     //   continue;
//     // }
//     // if (
//     //   currentChar === "(" ||
//     //   currentChar === ")" ||
//     //   currentChar === "-" ||
//     //   currentChar === " " ||
//     //   typeof parseInt(currentChar, 10) === "number"
//     // ) {
//     //   areaCode.push(currentChar);
//     //   str = str.slice(1);
//     // }
//     // Processing area code
//     // if (areaCode.length < 5) {
//     //   // Allow for up to 5 characters: e.g., (123)
//     //   if (currentChar === "(") {
//     //     areaCode.push(currentChar);
//     //   } else if (currentChar === ")") {
//     //     areaCode.push(currentChar);
//     //   } else if (/[0-9]/.test(currentChar)) {
//     //     areaCode.push(currentChar);
//     //   } else {
//     //     return false;
//     //   }
//     //   str = str.slice(1);
//     //   continue;
//     // }
//     // str = str.slice(1);
//   }
