/* 
    write a JavaScript program to create a new string from a given string taking the first 3 characters
    and the last 3 characters of a string and adding them together.
    the string length must be 3 or more,
    if not, the original string is returned.
*/

/* the steps: */
// when you write for example "Ayaat Ataa" 
// you must be return the first 3 characters and last 3 characters
// for Example : "Ayaat Ataa" => Ayataa.
// the string length must be 3 or more, if not, the original string is returned.
// Go => Go.

const mergeChar=(word)=>{
    if(word.length >= 3){
        const firstLetter= word.slice(0,3);
        const lastLetter= word.slice(word.lastIndexOf(word.slice(-3)))
        return `${firstLetter}${lastLetter}`
    }
    else{
        return word;
    }
}
console.log(mergeChar("Ayaat Atyaa"))
console.log(mergeChar("Youssef Turkey"))
console.log(mergeChar("on"))