// Write a program to find the node at which the intersection of two singly linked lists begins.

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). 
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before 
// the intersected node in A; There are 3 nodes before the intersected node in B.

let headA = [4,1,8,4,5]
let headB = [5,6,1,8,4,5]

var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) { // if one list is empty it is null. no intersection point
        return null
    }
    let node1 = headA // used as a pointer to point at specific node of headA
    let node2 = headB // used as a pointer to point at specific node of headB

    while (node1 !== node2){ 
        node1 = node1.next
        node2 = node2.next
        
        if (node1 === node2){
            return node1
        }
        
        if (node1 === null) { // start over at the beginning of headB list to make the indicators match traversing
            node1 = headB
        }
        
        if (node2 === null) { // start over at the beginning of headA list to make the indicators match when traversing
            node2 = headA
        }
        
        
    }
    return node1;
    
};