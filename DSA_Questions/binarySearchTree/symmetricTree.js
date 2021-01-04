// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// first try, on the right track, null root should be true, need to use a helper function with each side of root to compare

var isSymmetric = function(root) {
    if (root === null){
        return false
    }

    if (root.right === root.left){
        return true
    } 
    return isSymmetric(root.right) && isSymmetric(root.left)
}

// ANSWER --------------------------------------------------------------
// recursive Depth first search
// Time Complexity: O(n), we possibly visit all nodes
// Space Complexity: O(n), call stack can go as deep as height of tree and height can be at most n (in case of a skewed tree)

var isSymmetric = function(root){
    if (root === null){  // if there is no root just an empty tree, then it is symmetrical
        return true
    }

    return checkNodes(root.left, root.right)
}

var checkNodes = function(tree1, tree2){       //check the two side branches that come out of root
    if (tree1 === null || tree2 === null){     // if at least one is empty it will compare them
        return tree1 === tree2
    }

    if (tree1.val !== tree2.val){              // if one doesn't equal the other, it is not symmetrical
        return false
    }
    // now check the children nodes of this level of nodes on each side of tree
    return checkNodes(tree1.left, tree2.right) && checkNodes(tree1.right, tree2.left)
}