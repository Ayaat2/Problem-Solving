// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

/* Pseudocode */
// 1. convert the number to string
// 2. reverse the string
// 3. compare the original string with the reversed string
// 4. return true if they are the same, otherwise return false

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str=x.toString(); 
    const reversedStr=str.split("").reverse().join("");
    return str===reversedStr? true : false;
};
console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false