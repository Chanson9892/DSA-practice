// https://leetcode.com/problems/the-kth-factor-of-n/
// 1492. The kth Factor of n

// Given two positive integers n and k.
// A factor of an integer n is defined as an integer i where n % i == 0.
// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 
// if n has less than k factors.

// Example 1:

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.


var kthFactor = function(n, k) {
    if (k==1) return 1; // 1 is always the smallest factor
    let factors = [1];
    for (let i = 2; i <= Math.floor(n/2); i++) { // 2nd largest factor could be n/2, not necessary to iterate to n
        if (n % i === 0) { // i is a factor of n
            factors.push(i);
        }
    }
    factors.push(n) // n is always largest factor
    if (factors.length >= k) { // kth factor exists in our array
        return factors[k - 1];
    } else {
        return -1;
    }
};
