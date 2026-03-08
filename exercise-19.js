/* 
    problem:
        write a javascript program to generate a random hexadecimal color code.
*/
// the steps to solve the problem are:
/* 1. Create a string of hexadecimal characters (0-9 and A-F).
   2. Initialize an empty string to store the color code.
    3. Loop 6 times and in each iteration, generate a random index 
    to select a character from the hexadecimal string and append it to the color code string.
    4. Return the color code string prefixed with a # character.
*/
const generateHexColor=()=>{
    const hexChars="0123456789ABCDEF";
    let color="#";      
    for(let i=0; i<6; i++){
        const randomIndex=Math.floor(Math.random() * hexChars.length);
        color += hexChars[randomIndex];
    }
    return color;
}
console.log(generateHexColor()) // Output: a random hexadecimal color code, e.g. "#3E2F1B"
console.log(generateHexColor()) // Output: a random hexadecimal color code, e.g. "#A1B2C3"
console.log(generateHexColor()) // Output: a random hexadecimal color code, e.g. "#F0E1D2"