let heights = [1,8,6,2,5,4,8,3,7]
var maxArea = function(height) {
  let output = 0
  let left = 0
  let right = height.length - 1
  while (left < right){ 
    let width = right - left 
    if (height[left] > height[right]){
      output = Math.max(output, width * height[right])
      right--
    } else {
      output = Math.max(output, width * height[left])
      left++
    }
  }
  return output
}

maxArea(heights)