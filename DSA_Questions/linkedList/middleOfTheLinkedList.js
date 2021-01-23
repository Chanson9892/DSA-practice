// https://leetcode.com/problems/middle-of-the-linked-list/

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.


var middleNode = function(head) {
    let count = 1                       // count the amount of nodes start with 1 because head is 1
    let current = head                  // pointer
    while (current) {                   // while current is not null
        count++ 
        current = current.next          // move to next node
    }
    current = head                      // resets pointer to be start of list
    let half = Math.ceil(count/2)       // grabs the high middle 
    count = 0                           // resets counter
    while (count < half ){              // goes till halfway
        count++
        middle = current                // sets middle to be the node we are on
        current = current.next          // move to next node
    }
    return middle
};

