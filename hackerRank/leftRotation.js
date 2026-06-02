// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

// Example
// d = 2
// arr = [1,2,3,4,5]

// After 2 rotations, the array becomes [3,4,5,1,2].

// Function Description

// Complete the rotateLeft function in the editor below.

// rotateLeft has the following parameters:

// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns
// int[n]: the rotated array

// Input Format

// The first line contains two space-separated integers that denote n, the number of integers, and d, the number of left rotations to perform.
// The second line contains n space-separated integers that describe arr[].

// Constraints
// 1 <= n <= 10^5
// 1 <= d <= n
// 1 <= arr[i] <= 10^6

// Sample Input

// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

// Explanation

// To perform d=4 left rotations, the array undergoes the following sequence of changes:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

/* Steps to solve the problem */
// Step 1: Create a new array to hold the rotated elements
// Step 2: Loop through the original array starting from the dth index to the end
// Step 3: Add each element to the new array
// Step 4: Loop through the original array starting from the 0th index to the d-1 index
// Step 5: Add each element to the new array
// Step 6: Return the new array


function rotateLeft(d, arr) {
    // Step 1: Create a new array to hold the rotated elements
    const rotatedArray=[];
    // Step 2: Loop through the original array starting from the dth index to the end
    for(let i=d; i<arr.length; i++){
        // Step 3: Add each element to the new array
        rotatedArray.push(arr[i]);
    }
    // Step 4: Loop through the original array starting from the 0th index to the d-1 index
    for(let i=0; i<d; i++){
        // Step 5: Add each element to the new array
        rotatedArray.push(arr[i]);
    }
    // Step 6: Return the new array
    return rotatedArray;
}
const d=4;
const arr=[1,2,3,4,5];
console.log(rotateLeft(d, arr));// Output: [5,1,2,3,4]


