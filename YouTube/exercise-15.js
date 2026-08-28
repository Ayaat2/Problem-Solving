/*

Problem :
write a javascript program to replace the first digit in a string 
(should contains at least one digit) with a $ character.

*/
// the steps to solve the problem are:
/*use regex to find the first digit in the string
     regex is short for regular expression, it is a sequence of characters that forms a search pattern, 
     it is used to match character combinations in strings.*/
// for example: /\d/ => it matches any digit character (0-9)
// use the replace() method to replace the first digit with a $ character.
// for example: str.replace(/\d/, '$') => it replaces the first digit in the string with a $ character.

const replaceFirstDigit=(str)=> str.replace(/\d/, "$");
// or const replaceFirstDigit=(str)=> str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("abc123")) // Output: "abc$23"
console.log(replaceFirstDigit("1abc123")) // Output: "$abc123"
console.log(replaceFirstDigit("abc1234")) // Output: "abc$234"