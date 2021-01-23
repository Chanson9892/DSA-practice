// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


var maxSubArray = function(nums) {
    let total = nums[0]
    let temp = 0
    if (nums.length == 1){
        return nums[0]
    }
    for (let i= 0; i < nums.length; i++) {

        temp = Math.max(nums[i], temp + nums[i])
        total = Math.max(temp, total)
    }
    return total
};