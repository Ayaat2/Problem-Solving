/*
  write a javascript program to check two numbers and return true if one of the number is 100 or if
  the sum of the two numbers is 100.
 */

// get numbers = x ,y
// if x === 100 or y === 100 or x + y === 100 
// return true else return false

/* solution 1 */
const is100=(x,y)=> x===100 || y=== 100 || x + y ===100 ? true : false;
console.log(is100(100,5))