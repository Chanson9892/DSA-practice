// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
*/

var mergeTwoLists = function(l1, l2) {
    const head = new ListNode()
    let current = head // sets current to head of linked list. 
    //need to retain pointer to head to return later on. The current pointer gets updated as you merge the two lists.
     
    while(l1 && l2) { // while l1 and l2 exist, not at the end of the lists
        if(l1.val <= l2.val) { 
            current.next = l1
            l1 = l1.next // changes l1 to be the next value in the l1 array
        }
        else {
            current.next = l2
            l2 = l2.next // changes l2 to be the next value in the l2 array
        }
        
        current = current.next // sets current to be the l1 or l2 value and then move to the next spot in the linked list
    }
    // get any left over values in l1 and l2 it will push them into linked list
    if(l1) {
        current.next = l1
    }
    else {
        current.next = l2
    }
    
    return head.next
}

mergeTwoLists(list1, list2)

// Time Complexity: O(m + n), m = length of l1, n = length of l2
// Space Complexity: O(1)
