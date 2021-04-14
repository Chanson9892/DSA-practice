// 1721. Swapping Nodes in a Linked List
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning 
// and the kth node from the end (the list is 1-indexed).

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// fast ---------------------------------------------------




// slow answer -------------------------------------------------------------

var swapNodes = function(head, k) {
    let current = head
    let array = []
    while (current) {
        array.push(current.val)
        current = current.next
    }
    
    let temp = array[k-1]
    array[k-1] = array[array.length-k]
    array[array.length-k] = temp

    let node = null, tmp;
    for(let i = array.length - 1; ~i; i--){
        if (!node) {
            node = new ListNode(array[i]);
        } else {
            tmp = new ListNode(array[i]);
            tmp.next = node;
            node = tmp;
        }
    }

    return node
    
};


