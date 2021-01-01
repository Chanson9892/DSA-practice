// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2


let numbers = [0, 1, 2, 4, 5, 6]
let result = 3

var searchInsert = function(nums, target) {
     for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) return i; 
    }
    return nums.length;
};

searchInsert(numbers, result)