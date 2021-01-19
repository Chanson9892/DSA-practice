// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// example
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (2).


// use two pointer. the fast will lap slow and will match on to the same node eventually.
// if they don't it is false
var hasCycle = function(head) {
    if (!head || !head.next){ // if head exists
        return false
    }
    let slow = head // the two pointers
    let fast = head

    while (fast.next && fast.next.next) { // edge cases to see if it a cycle or will become a null
        slow = slow.next
        fast = fast.next.next

        if (slow === fast){
            return true
        }
    }
    return false
};