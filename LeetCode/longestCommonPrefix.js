// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// Pesudo Code:
// 1. Check if the array is empty
//    - If yes, return an empty string ""

// 2. Initialize the prefix as the first word in the array

// 3. Loop through each word in the array starting from the second word
//    a. While the current word does not start with the prefix
//       i. Remove the last character from the prefix
//    b. If prefix becomes empty, return ""

// 4. After checking all words, return the prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    let prefix=strs[0];

    for(let i=0; i< strs.length; i++){
        while(!strs[i].startsWith(prefix)){
            prefix=prefix.substring(0, prefix.length -1);
            if(prefix === "") return "";
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""
console.log(longestCommonPrefix([])); // Output: ""