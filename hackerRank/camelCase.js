
// There is a sequence of words in [CamelCase](https://en.wikipedia.org/wiki/CamelCase) as a string of letters, s , having the following properties:

// - It is a concatenation of one or more _words_ consisting of English letters.
// - All letters in the first word are _lowercase_.
// - For each of the subsequent words, the first letter is _uppercase_ and rest of the letters are _lowercase_.

// Given , determine the number of words in .

// **Example**  :
// s=oneTwoThree

// There are  words in the string: 'one', 'Two', 'Three'.

// **Function Description**

// Complete the _camelcase_ function in the editor below.

// camelcase has the following parameter(s):

// - _string s_: the string to analyze

// **Returns**

// - _int:_ the number of words in 

// **Input Format**

// A single line containing string s .

// **Constraints** :
// - 1 <= length of s <= 10^5
// - s consists of English letters only (i.e., [a-z] and [A-Z]).


// **Sample Input**

// ```
// saveChangesInTheEditor
// ```

// **Sample Output**

// ```
// 5
// ```

// **Explanation**

// String s contains five words:

// 1. save
// 2. Changes
// 3. In
// 4. The
// 5. Editor


/* steps to solve the problem:*/

// 1. initialize a variable to count the number of words, starting with 1 since the first word is always lowercase
// 2. iterate through each character in the string
// 3. if the character is uppercase, increment the word count
// 4. return the total word count

/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    let wordCount=1; // Start with 1 since the first word is always lowercase

    s.split("").forEach(char => {
        if(char >= 'A' && char <='Z'){
            wordCount++; // Increment word count for each uppercase letter
        }
    })

    return wordCount;
}
console.log(camelcase("saveChangesInTheEditor")); // Output: 5