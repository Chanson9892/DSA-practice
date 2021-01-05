// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer 
// range: [−2^31, 2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// Example 1:
// Input: x = 123
// Output: 321

let input = 123

var reverse = function(x) {
    let isNegative = false
   if(x < 0 ){
      isNegative = true
      x = x * -1
    }
    x = x.toString().split('').reverse().join('')
    if (x >= (2**31)-1){
      return 0
    }
    if (isNegative === true){
      x = x * -1
    }
    return x
  
};

reverse(input)

// VIDEO ANSWER ------------------

var reverse = function(x) {
    let negative = x < 0 //check to see if x is true or false
    let reversed = 0

    if (negative) {
        x*= -1
    }

    while (x > 0){
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x/10)
    }
    if (reversed > (2**31)-1){
        return 0
    }
    return negative ? reversed * -1 : reversed
};