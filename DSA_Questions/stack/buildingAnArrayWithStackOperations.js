//1441. Build an Array With Stack Operations
//https://leetcode.com/problems/build-an-array-with-stack-operations/
// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

// Build the target array using the following operations:

// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// Return the operations to build the target array. You are guaranteed that the answer is unique.

// Example 1:

// Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation: 
// Read number 1 and automatically push in the array -> [1]
// Read number 2 and automatically push in the array then Pop it -> [1]
// Read number 3 and automatically push in the array -> [1,3]

let target = [1,3]
let n = 3

var buildArray = function(target, n) {
    let stack = []
    let j = 1 // used as a pointer to traverse our target array
    for(let i = 0; i < target.length; i++) {
      if (target[i] === j) { // if j is in the target array
        stack.push("Push")
      } else { // if our j is not in our target array
            stack.push("Push", "Pop")
            i-- // to ignore the j value
        }

      j++
    }
    return stack
};
buildArray(target, n)