// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/ 

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
// return the number of negative numbers in grid.

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.


var countNegatives = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++){ //goes into the matrix
        for(let j = 0; j < grid[i].length; j++){ //goes into each array
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    return count
};

// time complexity: O(m*n) double for loop very slow depends on length of matrix and length of arrays
// space complexity: O(n) only one count

// faster way ---------------------------------------------------------

var countNegatives = function(grid) {
    return grid.flat().filter(ele => ele < 0).length;
};