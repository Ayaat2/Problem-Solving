/* 
    problem: 
    write a javascript program to find the number of even digits in an array of integers.
*/

// The steps to solve the problem are:
// 1. Create a function that takes an array of integers as input. 
// 2. you should loop through the array and use the filter method to filter out the even digits from the array.
// 3. like this:[1, 2, 3, 4, 5, 6] => [2, 4, 6]

const isEven =(arr)=> result=arr.filter(even => even % 2 === 0);

console.log(isEven([1, 2, 3, 4, 5, 6])) // Output: [2, 4, 6]


