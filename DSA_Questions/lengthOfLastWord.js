// Given a string s consists of some words separated by spaces, return the length of the last word in the string. 
// If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.

let sentence = "hello world"

var lengthOfLastWord = function(s) {
    let words = s.split(' '); 
    words = words.filter(item => item !== ''); // filters to only have words, no spaces
    console.log(words)
    return words.length ? words[words.length-1].length : 0 //if words.length exists it will give length of last word
};

lengthOfLastWord(sentence)

//// another solution

var lengthOfLastWord = function(s) {
    s = s.trim()
    let words = s.split(" ")
    let lastWord = words.pop()
    return lastWord.length
};

lengthOfLastWord(sentence)