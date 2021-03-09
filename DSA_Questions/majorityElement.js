//https://leetcode.com/problems/majority-element/
// 169. majority element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
let nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
  let map = {}
  let maxKey = nums[0], maxCount = 1;
  for (let i = 0; i < nums.length; i++){
    let value = nums[i]
    if (!map[value]){
      map[value] = 1
    } else {
      map[value]++
    }
    if(map[value] > maxCount){
      maxKey = value
      maxCount = map[value]
    }
  }
  return maxKey
  
};

majorityElement(nums)
