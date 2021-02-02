// https://leetcode.com/problems/palindrome-linked-list/
// Given a singly linked list, determine if it is a palindrome.

// Example 2:

// Input: 1->2->2->1
// Output: true

var isPalindrome = function(head) {
    let current = head // pointer
    let values = [] // keep track of values
    while (current !== null) { // runs until we are at the end of the list
        values.push(current.val) // pushes value into values
        current = current.next // moves the pointer to next node
    }
    let start = 0 // pointer
    let end = values.length - 1 // pointer
    while (start < end) {
        if (values[start] !== values[end]) { // checks the pointer values to see if they are the same
            return false
        }
        start++
        end--
    }
    return true
};

///////////////////////////////////////////////////////////video answer

var isPalindrome = function(head) {
    let values = [] // keep track of values
    while (head) { // runs until we are at the end of the list
        values.push(head.val) // pushes value into values
        head = head.next // moves the pointer to next node
    }
    let forward = values.join(',')
    let reversed = values.reverse().join(',')

    return forward === reversed // returns true or false 
};