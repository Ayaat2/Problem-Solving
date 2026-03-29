// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Pesudo Code:
// 1. create a stack to keep track of opening brackets
// 2. create a map to store the corresponding closing brackets for each opening bracket
// 3. loop through each character in the string
//    a. if the character is an opening bracket, push it onto the stack
//    b. if the character is a closing bracket, check if the stack is empty or if the top of the stack does not match the corresponding opening bracket from the map
//       i. if either condition is true, return false
//       ii. if the top of the stack matches, pop the opening bracket from the stack
// 4. after the loop, check if the stack is empty
//    a. if it is empty, return true (all brackets are matched)
//    b. if it is not empty, return false (there are unmatched opening brackets)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map ={
        '(': ')',
        '{': '}',
        '[': ']'
     }; 
     for (let i=0; i < s.length; i++){
        let char = s[i];
        if(map[char]){
            stack.push(char);
        }
        else{
            if(stack.length ===0 || map[stack.pop()] !==char){
                return false;
            }
        }    
    }
    return stack.length === 0;
}
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([])")); // Output: true
