// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// steps

// 1 declare stack which will hold only the opening parens
// 2 traverse the input string
// 3 if the current string is an opening parens, push to stack
// 4 if the current string is a closed parens, pop from stack, if popped parens isn't matching parens, return false
// 5 after complete traversal, return false if stack has any items

let input = '()[]{}'

var isValid = function(s) {
    let stack = []

    let open = { // finds parens pair and determines if parens is left
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let closed = { // determines if parens is closed
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (open[char]){
            stack.push(char)
        } else {
            if (open[stack.pop()] !== char){ //open will give the match to stack to be able to compare it to char
                return false
            }
        }
    }
    return stack.length === 0 // if stack is 0, return true, if not return false
};

isValid(input)