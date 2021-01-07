// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

let stairs = 4
var climbStairs = function(n) {
    if (n < 3 ) return n;
    let arr = [1,2];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2]; //grabs the last two numbers and adds them together to be the specific amount of ways to climb.
    }
    return arr[arr.length-1];
};

climbStairs(stairs)

//Time complexity: O(n) single loop upto n
// Space complexity: O(n) array of size n is used.