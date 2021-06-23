// Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// time O(n) space O(1)

var maxDepth = function(root) {
    if (!root) return 0
    
    let max = Math.max(maxDepth(root.left), maxDepth(root.right)) // keeps going down each side of the tree and finds the length.
    
    // max doesn't include the root
    return max + 1
};