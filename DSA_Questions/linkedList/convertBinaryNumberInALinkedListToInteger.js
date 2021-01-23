// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10


var getDecimalValue = function(head) {
    let numbers = []
    while (head) { //as long as there is a head
        numbers.push(head.val)
        head = head.next
    }
    return parseInt(numbers.join(""), 2) //joins the numbers together and returns the binary integer
};