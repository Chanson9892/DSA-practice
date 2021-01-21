// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/ 
//Given an integer n, return any array containing n unique integers such that they add up to 0.

//example 1
//Input: n = 5
//Output: [-7,-1,1,3,4]

let number = 5 

var sumZero = function(n) {
    let array = [] 
    for (i = 1; i <= Math.floor(n/2); i++){ //goes till more than half of n
        array.push(-i, i) // pushes the value of i and -i to make sure it equals 0 and unique number
    }
    if (n % 2 == 1) { // if n is an odd number
        array.push(0) // adds a 0 to make array have total value of 0
    }
    return array
};

sumZero(number)

// output: [-1,1,-2,2,0]