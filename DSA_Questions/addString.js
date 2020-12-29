// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

let number1 = 2
let number2 = 3

var addStrings = function(num1, num2) {
    const number1 = num1.length;
    const number2 = num2.length;
    
    let i = number1 - 1; // index for num1
    let j = number2 - 1; // index for num2
    
    let result = "";
    let carry = 0;
    
    while (i >= 0 || j >= 0) {
        const dig1 = i < 0 ? 0 : parseInt(num1.charAt(i));
        const dig2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        
        const sum = dig1 + dig2 + carry;
        const dig3 = sum % 10;
        carry = Math.floor(sum / 10);
        
        result = dig3 + result;
        i--;
        j--;
    }
    
    if (carry == 1) result = carry + result;
    
};

addStrings(number1, number2)