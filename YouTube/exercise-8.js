/* 
    write a javaScript program to concatenate two strings
    expect their first character
*/

/* The steps: */
// add two parameters
// expect their first character 
// for example: Ayaat Atyaa => yaattyaa

const concatenateString=(wordOne,wordTwo)=>{
   const string1= wordOne.slice(1);
    const string2 =wordTwo.slice(1);
    return `${string1}${string2}`
}
console.log(concatenateString("Ayaat","Atyaa"))