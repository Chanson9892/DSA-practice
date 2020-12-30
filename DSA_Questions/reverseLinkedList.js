// Reverse a singly linked list.
// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL


// iterative
var reverseList = function(head) {
    let prev = null // sets the previous of head to null
    let current = head // sets current to head
    let next = null // will set the next node in the future
    while(current != null){
        next = current.next //saves the next node to be currents next node
        current.next = prev // reverses the arrow to face opposite direction. 
        prev = current  // advances prev to be the current node
        current = next // advances current to be the next node, moving the chain
    }
    return prev // this is the new head at the end

};

// recursive
// 1) here's my next node, get back to me with a reversed list (recursion going down backwards)
// 2) base case hit a single node is a reverse list (end of downward recursion)
// 3) recursion returns upwards as we go up each node adds itself to the reversed list being built while at the same time
// passing the list's head up and up and up 
var reverseList = function(head) {
    if (head == null || head.next == null){ //if the list is just head, return it 
        return head;
    }
    let reversedListHead = reverseList(head.next) // takes us to the last node of the list
    head.next.next = head; // sets the next nodes next to current node
    head.next = null; // sets current node to null
    return reversedListHead // starts going up the list to do the same thing
};