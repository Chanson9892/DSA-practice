// https://leetcode.com/problems/remove-linked-list-elements/ 

// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var removeElements = function(head, val) {
    if (head === null) { // empty linked list
        return head;
    }
    
    while (head !== null && head.val === val) { // if the head of list matches val, moves to next node
        head = head.next;
    }
    
    let current = head // pointer
    while (current !== null && current.next !== null) { // checks to see if there is a current node and next node attached to current
        if(current.next.val === val){
            current.next = current.next.next    // skips over the val and the next value becomes 2x next
        } else {
            current = current.next  // moves to the next node on the list to run through the while again
        }
    }
    return head
};