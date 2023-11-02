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
  const regex = /^(?=(?:[^0-9]*[0-9]){10,11}[^0-9]*$)[0-9\s\-()]+$/;

  if (!regex.test(str)) {
    return false;
  }

  //if there is a 1 and there are 9 other numbers
  const onlyNumbers = str.replace(/[^0-9]/g, "");
  const restOfPhoneNumber = onlyNumbers.slice(1);

  if (onlyNumbers[0] === "1") {
    if (restOfPhoneNumber.length !== 10) {
      return false;
    }
  }
  if (onlyNumbers[0] !== "1") {
    if (restOfPhoneNumber.length !== 9) {
      return false;
    }
  }

  let countryCode = [];
  let areaCode = [];
  let centOfficeCode = [];
  let lineNumber = [];

  for (let i = 0; i < str.length; i++) {
    if (onlyNumbers.length === 11) {
      console.log("onlyNumbers is 11, includes 1");
      if (str[i] === "1") {
        if (i > 0) {
          console.log("item before the 1");
          return false;
        } else {
          console.log(i - 1);
          console.log(str[i - 1]);
          countryCode.push(str[i]);
          continue;
        }
      }
    }

    //sorting the countryCode
    if (areaCode.length < 1) {
      let slicedFromHere = str.slice(i);
      console.log("*" + slicedFromHere + "*" + " areaCode sliced From here");
      if (str[i] === "(") {
        if (str[i + 4] === ")") {
          console.log("areaCode format is '(555)'");
          areaCode.push(str.slice(i, i + 5));
          i += 5;
        } else {
          return false;
        }
      } else if (str[i] === " ") {
        if (
          !isNaN(str[i + 1]) &&
          !isNaN(str[i + 2]) &&
          !isNaN(str[i + 3]) &&
          !isNaN(str[i + 4])
        ) {
          console.log("areaCode format is ' 555'");
          areaCode.push(str.slice(i, i + 4));
          i += 4;
        } else if (
          str[i + 1] === "(" &&
          str[i + 5] === ")" &&
          str[i + 6] === " "
        ) {
          console.log("areaCode format is (555)");
          areaCode.push(str.slice(i, i + 7));
          i += 7;
        } else if (str[i + 4] === " ") {
          console.log("areaCode format is  ' 555 ' ");
          areaCode.push(str.slice(i, i + 5));
          i += 5;
        } else if (!isNaN(str[i + 4]) || str[i + 4] === "-") {
          areaCode.push(str.slice(i, i + 4));
          i += 4;
        } else {
          console.log("invalid format from areaCode");
          return false;
        }
      } else if (!isNaN(str[i])) {
        if (isNaN(str[i + 3] && isNaN(str[i + 4]))) {
          return false;
        }
        console.log("areaCode format is '555' ");
        areaCode.push(str.slice(i, i + 3));
        i += 3;
      } else {
        return false;
      }
    }

    //sorting the areaCode
    if (areaCode.length === 1 && centOfficeCode.length < 1) {
      let slicedFromHere = str.slice(i);
      console.log(
        "*" + slicedFromHere + "*" + " centOfficeCode sliced From here"
      );
      let lengthAreaCode = areaCode[0];
      let areaCodeLastChar = lengthAreaCode[lengthAreaCode.length - 1];

      if (str[i] === "-") {
        if (areaCodeLastChar === " " || areaCodeLastChar === ")") {
          console.log(
            "false, centOffice start with hyphen and areaCode ends with space or parenthesis "
          );
          return false;
        } else if (str[i + 4] === "-") {
          console.log("centOfficeCode format '-555-'");
          centOfficeCode.push(str.slice(i, i + 5));
          i += 5;
        } else {
          console.log("centOfficeCode invalid format");
          return false;
        }
      } else if (str[i] === " " && !isNaN(str[i + 1])) {
        if (areaCodeLastChar === " " || areaCodeLastChar === ")") {
          console.log(
            "false, centOffice start with hyphen and areaCode ends with space or parenthesis "
          );
          return false;
        }
        if (!isNaN(str[i + 1]) && !isNaN(str[i + 2]) && !isNaN(str[i + 3])) {
          console.log("centOfficeCode format ' 555'");
          centOfficeCode.push(str.slice(i, i + 4));
          i += 4;
        }
      } else if (!isNaN(str[i])) {
        if (str[i + 4] === "-" || str[i + 4] === " ") {
          console.log("centOfficeCode format '555-' or '555 ");
          centOfficeCode.push(str.slice(i, i + 4));
          i += 4;
        } else if (isNaN(str[i + 1]) || isNaN(str[i + 2])) {
          console.log(isNaN(str[i + 1]) + str[i + 1]);
          console.log(isNaN(str[i + 2]) + str[i + 2]);
          return false;
        } else {
          console.log("centOfficeCode format '555'");
          centOfficeCode.push(str.slice(i, i + 4));
          i += 4;
        }
      } else {
        console.log("invalid centOfficeCode format");
        return false;
      }
    }

    //sorting the centOfficeCode
    if (centOfficeCode.length === 1 && lineNumber.length < 1) {
      let slicedFromHere = str.slice(i);
      console.log("*" + slicedFromHere + "*" + " lineNumber sliced From here");
      let lengthCentOfficeCode = centOfficeCode[0];
      let centOfficeCodeLastChar =
        lengthCentOfficeCode[lengthCentOfficeCode.length - 1];

      if (str[i] === "-") {
        if (
          centOfficeCodeLastChar === " " ||
          centOfficeCodeLastChar === ")" ||
          centOfficeCodeLastChar === "-"
        ) {
          console.log("lineNumber invalid format");
          return false;
        } else {
          lineNumber.push(str.slice(i));
        }
      } else if (str[i] === " " && !isNaN(str[i + 1])) {
        if (
          centOfficeCodeLastChar === " " ||
          centOfficeCodeLastChar === ")" ||
          centOfficeCodeLastChar === "-"
        ) {
          console.log(
            "false, lineNumber start with hyphen and areaCode ends with space or parenthesis "
          );
          return false;
        }
        if (!isNaN(str[i + 1]) && !isNaN(str[i + 2]) && !isNaN(str[i + 3])) {
          console.log("lineNumber format ' 555'");
          lineNumber.push(str.slice(i, i + 4));
          i += 4;
        }
      } else if (!isNaN(str[i])) {
        if (str[i + 4] === "-" || str[i + 4] === " ") {
          console.log("lineNumber format '555-' or '555 ");
          lineNumber.push(str.slice(i, i + 4));
          i += 4;
        } else {
          console.log("lineNumber format '555'");
          lineNumber.push(str.slice(i, i + 4));
          i += 4;
        }
      } else {
        console.log("invalid lineNumber format");
        return false;
      }
    }
  }

  console.log({
    str,
    countryCode,
    areaCode,
    centOfficeCode,
    lineNumber,
  });
  return true;
}


// console.log(telephoneCheck("1 555 555-5555"));
// console.log(telephoneCheck("555)-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("-1 (757) 622-7382"));
// console.log(telephoneCheck("555)555-5555"));
telephoneCheck2("55 55-55-555-5");
// console.log(telephoneCheck("5555555555"))

//alt solution # 1 - this whole problem can be solved with one line of regex....

//https://github.com/xdelmo/telephone-number-validator

function telephoneCheck2(str) {
  let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

  return regExp.test(str);
}

//explanation

//https://www.youtube.com/watch?v=t6Yr2PBmwC0