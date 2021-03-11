// 938. range sum of bst

// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
// Example 1:

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

var rangeSumBST = function(root, low, high) {
    var sum = 0;
   if (root == null) {  // no more nodes
       return sum;
   }

   if (root.val > low) { //if root is greater than low go left
       sum += rangeSumBST(root.left, low, high); 
   }
   if (root.val <= high && root.val >= low) { //if root is in range, add to sum
       sum += root.val;
   }
   if (root.val < high) { //if root is less than high go right
       sum += rangeSumBST(root.right, low, high);    
   }    
   
   return sum;
   
};
