// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
//The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
// This method returns -1 if the value to search for never occurs.

let word = 'football'

var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

firstUniqChar(word)