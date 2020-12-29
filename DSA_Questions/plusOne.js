// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]

let numbers = [1, 2, 3, 9]

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    digits.unshift(1);
    return digits;
};

plusOne(numbers)