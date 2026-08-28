/* 
    problem: Write a JavaScript program to find the number of even values up to a given number.

*/

// the steps to solve the problem are:
// 1. create a function that takes an array of integers as input.

// 2. you should loop trough the array and use the filter method to filter out the even digits from the array 
// and then return the length of the filtered array.
// 3. like this : [1, 2, 3, 4, 5, 6] => 3

const countEven=(arr)=> result = arr.filter(even => even % 2 === 0).length;

console.log(countEven([1, 2, 3, 4, 5, 6])) // Output: 3