// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true


// TRY number 1.... do not need to fill out a tree. p and q are already trees, already have left and right.

// var isSameTree = function(p, q) {
//     const treeOne = new TreeNode(p[0])
//     const treeTwo = new TreeNode(q[0])
//     let mid = Math.floor(nums.length/2);

//     for (var i = 0; i < mid.length; i++) {
//         if(i % 2 === 0) { // index is even
//             treeOne.left = p[i]
//             treeTwo.left = q[i]
//         } else {
//             treeOne.right = p[i]
//             treeTwo.right = q[i]
//         }
//     }
//     if (treeOne === treeTwo){
//         return true
//     } else {
//         false
//     }
// };


// Time Complexity: O(n), we visit all nodes if they are the same tree
// Space Complexity: O(n), call stack can go as deep as the height 
// of tree, and the height can be n at most in case of a skewed tree.
// recursive solution
let isSameTree = function(p, q) {
    if (p === null || q === null) {
        return p === q;
    }
    
    if (p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};