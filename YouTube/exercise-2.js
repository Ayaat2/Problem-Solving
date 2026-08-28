/* 
    exercise-2:
    write a javaScript program to get the 
    extension of a filname
*/

// if there is index.html = return the html
// if there is index.js = return the 

// use slice and lastIndexOf because in the first see the . to cut.

const exeFile=(file)=> file.slice(file.lastIndexOf("."));
console.log(exeFile("index.html"))
console.log(exeFile("style.css"))
console.log(exeFile("main.js"))