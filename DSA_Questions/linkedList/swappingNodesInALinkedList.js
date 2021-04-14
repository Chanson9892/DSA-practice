// 1721. Swapping Nodes in a Linked List
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning 
// and the kth node from the end (the list is 1-indexed).

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// fast ---------------------------------------------------

var swapNodes = function(head, k) {
    let current = head
    let count = 0
    while (current) {
        count++
        current = current.next
    }

    current = head
    
    //position of swapping are k and n-k+1
	let endK = count-k+1
    
    // the linkedlist's swap position are same
    if(k == endK) {
        return head
    }
    
    let swap1, swap2, pointer = 1
    //pointers to the swapping position
    while(pointer<=count){
        if(pointer==k) {
            swap1=current
        }
        
        if(pointer==endK) {
            swap2= current
        }
        
        current=current.next
        pointer++
    }
	// swapping
    pointer = swap1.val
    swap1.val=swap2.val
    swap2.val=pointer

    return head
    
};

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


