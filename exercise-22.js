/* 
    problem: write a function that accepts a string as a parameter 
    and counts the number of vowels within the string.
    Note: As the letter "y" can function as both a vowel and a consonant, 
    we do not consider it as a vowel in this problem.
    a, e, i, o, u are the vowels we are looking for in the string.
*/
// the steps :
// for example : x = "hello world"
// split the string into an array of characters
// filter the array to include only the vowels
// return the length of the filtered array

const vowels=["a", "e", "i", "o", "u"];
const countVowels=(str)=> str.split("").filter(char=> vowels.includes(char)).length;
console.log(countVowels("hello world")) // 3
console.log(countVowels("javascript")) // 3
