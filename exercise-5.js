/* 
    write a JS program to create a new string adding "New!" in front of a given string. 
    If the given string begins with "New!" already then return the original string.

*/
// the steps :
// check if the string start with "New!" => str.startsWith("New!") or str.includes("New!") && str.indexOf("New!") === 0
// if it does return the original string => return str
// if it doesn't add "New!" in front of the string => return `New! ${str}`

const addNew = (str) => {
  if (str.startsWith("New!")) {
    return str;
  }
  return `New! ${str}`;
};
console.log(addNew("Book")); // New! Book
console.log(addNew("New! Book")); // New! Book
