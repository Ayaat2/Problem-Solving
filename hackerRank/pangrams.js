
// A _pangram_ is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either `pangram` or `not pangram` as appropriate.

// **Example**
// s='The quick brown fox jumps over the lazy dog'

// The string contains all letters in the English alphabet, so return `pangram`.

// **Function Description**

// Complete the function _pangrams_ in the editor below. It should return the string `pangram` if the input string is a pangram. Otherwise, it should return `not pangram`.

// pangrams has the following parameter(s):

// - _string s:_ a string to test

// **Returns**

// - _string:_ either `pangram` or `not pangram`

// **Input Format**

// A single line with string s .

// **Constraints**
// 0 < length of s <= 10 **3
// Each character of s is an English letter (i.e., [a-z] or [A-Z]) or a space.

// **Sample Input**

// **Sample Input 0**

// `We promptly judged antique ivory buckles for the next prize`

// **Sample Output 0**

// `pangram`

// **Sample Explanation 0**

// All of the letters of the alphabet are present in the string.

// **Sample Input 1**

// `We promptly judged antique ivory buckles for the prize`

// **Sample Output 1**

// `not pangram`

// **Sample Explanation 0**

// The string lacks an `x`.

/* steps to solve the problem:*/

// 1. create a set to store unique letters found in the string
// 2. iterate through each character in the string
//    - if the character is a letter, convert it to lowercase and add it to the set
// 3. after iterating through the string, check the size of the set
//    - if the size is 26, return 'pangram'
//    - otherwise, return 'not pangram'

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    let letters=new Set();
    for(let char of s){
        if(char >= 'A'&& char <='Z' || char >='a' && char <='z'){
            letters.add(char.toLowerCase())
        }
    }
    return letters.size === 26 ? 'pangram': 'not pangram'
}
console.log(pangrams('We promptly judged antique ivory buckles for the next prize')); // pangram
console.log(pangrams('We promptly judged antique ivory buckles for the prize')); // not pangram