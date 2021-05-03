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
    // pointer to go through the list
    let pointer = head

    // number of nodes in list
    let num = 0

    // iterate through list to get the number of nodes
    while (pointer) {
        num++
        pointer = pointer.next
    }

    // reset to beginning of list
    pointer = head
    
    // 2nd position of swapping is n-k+1
	let endK = num-k+1
    
    // if the list's swap position are same, there is no change
    if(k == endK) {
        return head
    }
    
    // swap1 and 2 are the nodes to switch
    // count is used to find the nodes to switch
    let swap1, swap2, count = 1

    //iterate through list to find the values to swap
    while(count<=num){
        // if count and k are the same, we found the 1st node to swap
        if(count==k) {
            swap1=pointer
        }
        
        // if count and endK are the same, we found the 2nd node to swap
        if(count==endK) {
            swap2= pointer
        }
        
        pointer=pointer.next
        count++
    }
	// swap
    let temp = swap1.val
    swap1.val = swap2.val
    swap2.val = temp

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


