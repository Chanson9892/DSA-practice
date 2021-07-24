// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. 
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary 
// numbers needed so that they sum up to n.
 
// Example 1:
// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32


var minPartitions = function(n) {
    //     let output = 0
    //     let array = n.toString().split("") //stringify the number, then make each digit an item in an array
    //   	array.map(x => parseInt(x)) //convert all the items back into numbers
        
    //     for(let i = 0; i < array.length; i++){
    //         if(array[i] > output) {
    //             output = array[i]
    //         }
    //     }
        
    //    return output
       // return Math.max(...n)
    return Math.max(...n.split(''))
};


