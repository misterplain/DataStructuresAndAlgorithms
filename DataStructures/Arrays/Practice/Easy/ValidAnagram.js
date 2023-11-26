//https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const letterObject = {};

  //run through first string
  for (let i = 0; i < s.length; i++) {
    if (!letterObject[s[i]]) {
      letterObject[s[i]] = 1;
    } else {
      letterObject[s[i]]++;
    }
  }

  //subtract from second string
  for (let i = 0; i < t.length; i++) {
    if (!letterObject[t[i]]) {
      return false;
    } else {
      letterObject[t[i]]--;
    }
  }

  console.log(letterObject);

  const values = Object.values(letterObject);
  console.log(values);

  const isAnagram = values.every((item) => item === 0);

  return isAnagram;
};

console.log(isAnagram("anagram", "nagaram"));
