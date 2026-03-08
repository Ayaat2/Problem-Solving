/* 
    Problem : 
      Write a javaScript function that returns true
      if the provided predicate function returns 
      true for all elements in a collection, false otherwise.
*/
// the steps :
// for example : x = [1, 2, 3, 4, 5]
// y >= []  
// use the every method to check if all element in the array satisfy the condition
// return the false if any element does not satisfy the condition
// return true if all element satisfy the condition

const isTrueForAll=(array)=> array.every(element=> element % 2 === 0)
console.log(isTrueForAll([2, 4, 6, 8])) // true
console.log(isTrueForAll([1, 2, 3, 4, 5])) // false
