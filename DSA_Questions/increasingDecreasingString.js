// https://leetcode.com/problems/increasing-decreasing-string/ 

// Given a string s. You should re-order the string using the following algorithm:
// ex1
// Input: s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

let string = "aaaabbbbcccc"

var sortString = function(s) {
   let sorted = s.split('').sort() //sorts s, each as separate value in array
   let letters = Array.from(new Set(sorted)); //one value of each unique letter
    let result = ''
  while (sorted.length > 0) {
    for (let i of letters){  //practically for loop going through each unique letter
      result += i
      sorted.splice(sorted.indexOf(i), 1) // takes out letter from letters
    }
    letters = Array.from(new Set(sorted)) // resets letters to see if any letter gets taken out completely
    for (let j of letters.reverse()) { //practically for loop foing through each unique letter reverse
      result += j;
      sorted.splice(sorted.indexOf(j),1); // takes out letter from letters
    }
    letters = Array.from(new Set(sorted)) // resets letters to see if any letter gets taken out completely
  }

  return result
   
};

sortString(string)
