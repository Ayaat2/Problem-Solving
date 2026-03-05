/*
    Problem:
    write a javaScript program to check a given string contains 
    2 to 4 occurrences of a specified character

*/

/* The steps: */
/* 
    1. Define a function that takes two parameters:
        - a string
        - a specified character

    2. Initialize a counter variable to 0.
    3. Loop through each character in the string.
    4. For each character:
        - If it matches the specified character,
            increment the counter by 1.

    5. After finishing the loop,
        check if the counter is between 2 and 4 (inclusive).

    6. If the count is between 2 and 4, return true.
   Otherwise, return false.

*/

const countOccurrences=(str, char)=>{
    const count = str.split("").filter(c => c === char).length;
    return count >= 2 && count <= 4;
}
console.log(countOccurrences("hello world", "o")); // true (2 occurrences)
console.log(countOccurrences("javascript", "a")); // true (2 occurrences)
console.log(countOccurrences("programming", "m")); // true (2 occurrences)
console.log(countOccurrences("mississippi", "s")); // false (4 occurrences)
console.log(countOccurrences("mississippi", "i")); // false (4 occurrences)