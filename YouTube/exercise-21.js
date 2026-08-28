/* 
    Problem: 
        Write a javaScript function that returns a passed string with letters in alphabetical order.
        Assume punctuation and numbers symbols are not included in the passed string.
*/

// the steps :
// for example : x = "webmaster"
// split the string into an array of characters
// sort the array in alphabetical order
// join the sorted array back into a string
// return the sorted string

const alphaOrder=(str)=> str.split("").sort().join("");
console.log(alphaOrder("webmaster")) // "abeemrstw"
