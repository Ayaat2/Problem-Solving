/* Write a JS program to replace every character in a given
string with the character following it in the alphabet */

// x = instead of return abc you should return bcd
// split("")=> ["a","b","c"]
// loop => map()
// x.charAtCode() //unicode of the character
// String.fromCharCode(x.CharAtCode() + 1) => convert unicode to character

function alphabet(str){
    return str.split("").map(char => char === "z"?"a": String.fromCharCode(char.charCodeAt(0) + 1)).join("")
}
console.log(alphabet("abc")) // bcd
console.log(alphabet("hello")) // ifmmp
