/* 
  problem: 
    Write a JavaScript program to get the largest even number from an array of integers.
*/

// the steps to solve the problem are:
// [1, 2, 3, 4, 5, 6,7,8,9,10] => 10
// use with rest parameters => aruguments 
// for example: function(...args) => args is an array of the arguments passed to the function
// use with spread operator => callback function 
// for example: Math.max(...arr) => Math.max(1, 2, 3, 4, 5, 6) => 6 
// math.max() is a built-in function that returns the largest of zero or more numbers.


const largestEven=(arr)=>{
    const evenArr = arr.filter(even=> even % 2 === 0);
    return evenArr.length > 0 ? Math.max(...evenArr) : null;
}
console.log(largestEven([1, 2, 3, 4, 5, 6])) // Output: 6
console.log(largestEven([1, 3, 5, 7, 9])) // Output: null
console.log(largestEven([2, 4, 6, 8, 10])) // Output: 10
