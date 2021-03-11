// Given a binary tree, convert it to a list.

// ------------------------------------------

// JavaScript
// grab the values of the binary tree and put them into a list like form. 


// grab each integer of each node of tree
// ordering does not matter
// we will want to start at the root, and go down the right branch.
// we want to remove all left child nodes from the right branch and add to the end
// of right branch. from the root we want to move all of the left branch to the end of right 

// binary tree has the node which has a node.val, node.left, node.right

// while loop until there is no node.left

//        a
//     b     c
//   d   e  f   g

//        a
//           c
//            g
//               b
//                 e
//                  f
//                   d

//                a
//                 b
//                  c
//                   d 
//                    e
//                     f
//                   g

function rearrange(tree){
    let node = tree.root // starts at tree.root and is a pointer to use
    let last = node;
    updateLast(last) 
    // iterate down right branch
    while(node){
    // check if there is a left node, if so add to right. move to next right node
      if(node.left){
        last.right = node.left
        node.left = null
      }
      updateLast(last)
      node = node.right
    }
}

function updateLast(last){
  while(last.right){
    last = last.right
  }
}

