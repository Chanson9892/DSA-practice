// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.


var sumOfUnique = function(nums) {
    let map = {}
    let total = 0
    for (let num of nums){ // will make a key for each num and increment it by 1
        // if(map[num] > 0){
        //     map[num]++
        // } else {
        //     map[num] = 1
        // }
        map[num] = map[num] + 1 || 1;
    }
    for (let key in map) { // goes over each key
    if (map[key] === 1) { // checks if key is 1
      total += parseInt(key)
    }
  }
  return total;
};