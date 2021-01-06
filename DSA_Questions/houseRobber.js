// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and 
//it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
//determine the maximum amount of money you can rob tonight without alerting the police.

//Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

numbers = [1,2,3,1]

// works for every other house but doesn't work if you skip two houses
var rob = function(nums) { 
    let total1 = 0
    let total2 = 0
    for(let i = 0; i < nums.length; i+=2){
        total1 += nums[i]
    }
    for(let i = 1; i < nums.length; i+=2){
        total2 += nums[i]
    }
    return Math.max(total1, total2)
};

rob(numbers)

// ANSWER ------------------------------------------------

var rob = function(nums) {
    let total = new Array(nums.length - 1);
    total[0] = nums[0]; // total[i] represents the maximum money that have been robbed up to i
    total[1] = Math.max(nums[0], nums[1]); // checks to see if numbers at 0 or 1 is bigger and makes that number the total
    for (let i = 2; i < nums.length; i++) {
        total[i] = Math.max(total[i-2] + nums[i], total[i-1]); // compares the new total if we skipped a house and the last total. 
                                                                // the highest value is the total at the index and then repeat
    }
    return total[total.length - 1];
};

rob(numbers)