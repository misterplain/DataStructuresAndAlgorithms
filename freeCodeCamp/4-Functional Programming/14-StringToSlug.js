// Apply Functional Programming to Convert Strings to URL Slugs
// The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

// Let's combine what we've learned to solve a practical problem.

// Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words

// The output is a string with the spaces between words replaced by a hyphen (-)

// The output should be all lower-cased letters

// The output should not have any spaces

//my attempt

// Only change code below this line
function urlSlug(title) {
  let slug = [];
  const trimmed = title.trim();
  const splitUp = trimmed.split(" ");

  splitUp.map((word) => {
    if (word === "") {
      return;
    }
    const firstLetter = word[0].toLowerCase();
    const remainingLetters = word.slice(1);
    const fullWord = firstLetter + remainingLetters;
    slug.push(fullWord);
    return fullWord;
  });

  const joined = slug.join("-");
  return joined;
}

// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug(" Winter Is  Coming"));

//alt solutions # 1

function urlSlug(title) {
    // This splits the string into an array of words. The regular expression /\s+/ matches one or more whitespace characters. This is beneficial in case there are multiple spaces between words. By splitting using this regular expression, you won't end up with empty strings in the resulting array.
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

//alt solution # 2

function urlSlug(title) {
  return title
    .split(" ")
    //This filters out any empty strings from the array. If there were two spaces between words in the original string, the split method would result in an empty string between the words. The filter method removes those.
    .filter((substr) => substr !== "")
    .join("-")
    .toLowerCase();
}
