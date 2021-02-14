// 682. Baseball Game
// https://leetcode.com/problems/baseball-game/

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, 
// where ops[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.


// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.


let ops = ["5","2","C","D","+"]

var calPoints = function(ops) {
    let stack = []
    for(let i = 0; i < ops.length; i++) {
      if (ops[i] === "+") { // add last two numbers
        stack.push(parseInt(stack[stack.length-1] + stack[stack.length-2]))
      } else if (ops[i] === "D") { // double the last score
            stack.push(parseInt(stack[stack.length-1] * 2))
      } else if (ops[i] === "C") { // remove last score
            stack.pop()
      } else {
        stack.push(parseInt(ops[i]))
      }
      
    }
    var sum = stack.reduce(function(a, b){ //adds all values in stack together
        return a + b;
    })
    return sum
};

calPoints(ops)
