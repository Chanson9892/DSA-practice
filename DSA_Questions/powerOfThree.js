// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x.
// Example 1:

// Input: n = 27
// Output: true


let val = 27
var isPowerOfThree = function(n) {
    x = (Math.log(n) / Math.log(3)).toFixed(10) //sets the amount of decimal places it has to 10
    return x % 1 === 0 ? true : false
};

isPowerOfThree(val)