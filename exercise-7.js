/*
    write a javaScript program to extract the first half of a string of even length
 */

/* The Steps: */
// If the number of letters is even
// Returns the number  of character divisions on 2
// for example "ayaatatyaa"=> "ayaat"
const halfEven=(word)=>{
   return word.length % 2 === 0 ? `${word.slice(0, word.length / 2)} is even` : `${word} is odd`;
}
console.log(halfEven("ayaatatyaa"));