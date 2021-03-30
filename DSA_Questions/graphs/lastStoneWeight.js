// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  
// The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

var lastStoneWeight = function(stones) {
    if (stones.length == 1){                 // base case
      return stones
    } else if (stones.length == 0){          // base case
      return 0
    }
    let heavy1 = Math.max(...stones)         // grabs heaviest stone
    stones.splice(stones.indexOf(heavy1), 1) // removes heaviest stone
    let heavy2 = Math.max(...stones)         // grabs 2nd heaviest stone
    stones.splice(stones.indexOf(heavy2), 1) // removes 2nd heaviest stone
    if (heavy1 > heavy2) {
      let newStone = heavy1 - heavy2
      stones.push(newStone)
    }
  return lastStoneWeight(stones) 
    
};