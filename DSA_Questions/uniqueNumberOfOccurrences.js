// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of 
// each value in the array is unique.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


let arr = [1,2,2,1,1,3]
var uniqueOccurrences = function(arr) {
    let map = {}
    for (let val of arr){
        if (!map[val]){
            map[val] = 1
        } else {
            map[val]++
        }
    }
    let vals = Object.values(map)
    // Set makes an array of unique values and checks its size vs vals length. if true, no duplicate occurrences
    let unique = new Set(vals).size == vals.length;  
    return unique
};

uniqueOccurrences(arr)

//////////////////////////////////////////////////////////////////

var uniqueOccurrences = function(arr) {
    const obj = {};
//     Creating hashmap to store count of each number
    arr.forEach(val => obj[val] = (obj[val] || 0) + 1);
//     Creating an array of the count times
    const val = Object.values(obj).sort((a, b) => a-b);
//     Now, just finding the duplicates
    for(let i = 0; i<val.length-1; i++){
        if(val[i]===val[i+1]) return false;
    }
    return true;
};