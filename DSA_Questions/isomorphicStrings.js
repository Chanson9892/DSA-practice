// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.

let string1 = "egg"
let string2 = "add"

var isIsomorphic = function(s, t) {
    let letters1 = {};
    let letters2 = {};
    
    // assigns a number(i) for each letter and checks to see if the number is the same as the other array letter
    // once a number is assigned it wont change so it checks through each letter to see if number matches
    for(var i = 0; i < s.length; i++) {
        if (letters1[s[i]] == undefined) {
            letters1[s[i]] = i
        } 
        if (letters2[t[i]] == undefined) {
            letters2[t[i]] = i
        }
        if (letters1[s[i]] != letters2[t[i]]) {
            return false
        }
    }
    return true
};

isIsomorphic(string1, string2)