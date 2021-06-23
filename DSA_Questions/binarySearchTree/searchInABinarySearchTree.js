// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val 
// and return the subtree rooted with that node. If such a node does not exist, return null.


// Example:

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

var searchBST = function(root, val) {
    // if (!val || !root) return null
    
    while(root) {
        if (val < root.val){
            root = root.left
        } else if (val > root.val){
            root = root.right
        } else {
            return root
        }
    }
    
    return null
};

