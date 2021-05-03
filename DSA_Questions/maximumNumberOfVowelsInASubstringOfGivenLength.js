// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k.
// Return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are (a, e, i, o, u).

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

var maxVowels = function(s, k) {
    let vowels = 'aeiou'
    let result = 0 // result
    let count = 0 // count of vowels of current window
    for (var i = 0; i < s.length; i++) {
        if (i >= k) { // remove window's first character
            // if the window's first character is a vowel, subtract from count
            if (vowels.includes(s[i - k])) {
                count--
            }
        }
		// add current character to window
        if (vowels.includes(s[i])) {
            // adds vowel to count
            count++
            result = Math.max(result, count)
            // number of vowels equal k
            if (result === k) {
                return k
            }
        }
    }
    return result
    
};