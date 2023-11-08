//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=false

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(time) {
  let hour = parseInt(time.slice(0, 2));
  let minute = time.slice(3, 5);
  let second = time.slice(6, 8);
  let type = time.slice(8);

  function getHour(hour) {
    if (type === "AM") {
      if (hour === 12) {
        return (parseInt(hour) - 12).toString();
      } else {
        return hour.toString();
      }
    } else if (type === "PM") {
      if (hour === 12) {
        return hour.toString();
      } else {
        return (parseInt(hour) + 12).toString();
      }
    }
  }

  let returnedHour = getHour(hour);
  if (returnedHour.length === 1) {
    returnedHour = "0" + returnedHour;
  }
  let returnedMinute = minute;
  let returnedSecond = second;

  return returnedHour + ":" + returnedMinute + ":" + returnedSecond;
}

// console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
