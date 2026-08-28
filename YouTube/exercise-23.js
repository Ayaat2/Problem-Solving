/*
    problem : write a function to find the first not repeatedcharacter in a string 
*/  
// the steps :
// for example : x = "leetcode"
// expect the output = "l"
// find() method returns the value of the first element 
// in the provided array that satisfies the provided testing function.Otherwise, it returns undefined.
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// spread the string into an array of characters [..."leetcode"] => ["l", "e", "e", "t", "c", "o", "d", "e"]

const isCommon=(str)=>{
    const chars=[...str];
    return chars.find(char => chars.indexOf(char) === chars.lastIndexOf(char));
}
console.log(isCommon("leetcode")) // "l"
console.log(isCommon("aabbcc")) // undefined