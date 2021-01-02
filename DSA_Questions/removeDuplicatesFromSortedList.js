// Given a sorted linked list, delete all duplicates such that each element appear only once.
// Example 1:
// Input: 1->1->2
// Output: 1->2

var deleteDuplicates = function(head) {
    let current = head
    while (current !== null && current.next !== null) { //checks to see if there is a current node and next node attached to current
        if (current.val === current.next.val){ 
        current.next = current.next.next                // skips over the duplicate and the next value becomes 2x next
        } else {
            current = current.next                      // moves to the next node on the list to run through the while again
        }
    
    }
    return head
};