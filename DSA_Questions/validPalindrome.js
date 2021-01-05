// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.
// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// var isPalindrome= function(s) {
//   let forward = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
//   let backward = s.split('').reverse().toString().replace(/[^A-Za-z0-9]/g, '').toLowerCase()

//   return forward === backward
// };


// isPalindrome(string)

var isPalindrome = function(s) {
  let forward = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  if(forward === forward.split('').reverse().join('')) return true
  return false
};

// var isPalindrome = function (s) {
//     s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
//     let left = 0,
//       right = s.length - 1
//     while (left <= right) {
//       if (s[left] != s[right]) {
//         return false
//       }
//       left++
//       right--
//     }
//     return true
// }