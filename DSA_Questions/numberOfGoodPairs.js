// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


let nums = [1,2,3,1,1,3]

var numIdenticalPairs = function(nums) {
    let pairs = 0
    let counter = 1
    for(let i = 0; i < nums.length; i++){
      
        for(let j = counter; j <nums.length; j++){
            if (nums[i] === nums[j]){
                pairs++
            }
            console.log(nums[i], nums[j], pairs)
        }
        counter++
    }
    return pairs
};
numIdenticalPairs(nums)