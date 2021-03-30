// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/


var intToRoman = function(num) {
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let ans = ""
    for (let i = 0; num; i++) { // goes through num
        while (num >= val[i]) {
            ans += rom[i] // adds roman letter 
            num -= val[i] // removes value of roman letter
        }
    }
     return ans
    
};