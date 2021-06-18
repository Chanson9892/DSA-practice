// https://leetcode.com/problems/container-with-most-water/
// 11. Container With Most Water
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Example:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water 
// (blue section) the container can contain is 49.

let heights = [1,8,6,2,5,4,8,3,7]
var maxArea = function(height) {
  let maxWater = 0 // keep track of max area of water
  let left = 0 // left pointer
  let right = height.length - 1 // right pointer
  
  while (left < right){   // pointers do not intersect
    let width = right - left // width of our container
    let minHeight = Math.min(height[left], height[right]) // grabs the smaller pointer
    maxWater = Math.max(maxWater, width * minHeight) // grab the max between our old container and new container
    
    // move the shorter pointer towards the other end by one
    if (height[left] > height[right]){
      right-- 
    } else {
      left++ 
    }
  }
  return maxWater
}

maxArea(heights)