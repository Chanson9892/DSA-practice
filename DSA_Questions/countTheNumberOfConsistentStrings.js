// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

var countConsistentStrings = function(allowed, words) {
    // check if letter in word of words is included in allowed
    let total = 0
    for (let word of words){
        for (let i = 0; i < word.length; i++) {
			let letter = word[i]

			if (!allowed.includes(letter)) { //letter not in allowed
                break //breaks for loop goes to next word
            } else if (i === word.length - 1) { //got to end of the word
                total++
            } 
		}
    }
    return total
};