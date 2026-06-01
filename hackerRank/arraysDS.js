// An array is a data structure that stores elements of the same type in a contiguous block of memory. In an array,A , of size N, each memory location has some unique index, i (where 0 <= i < N ), that can be referenced as A[i] or A .

// Your task is to reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example
// arr = [1,2,3]

// Return [3,2,1].

// Function Description

// Complete the function  with the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array
// Input Format

// The first line contains an integer,N , the number of integers in A .
// The second line contains N space-separated integers that make up A .

// Constraints
// 1 <= N <= 10^3
// 1 <= A[i] <= 10^4, where A[i] is the ith integer in A

// Sample Input 1
// [1,4,3,2]

// Sample Output 1
// [2,3,4,1]

// Explanation 1

// The original array is [1,4,3,2] . Reversed, it is [2,3,4,1]

/* Steps to solve the problem */
// Step 1: Create a new array to hold the reversed elements
// Step 2: Loop through the original array from the end to the beginning
// Step 3: Add each element to the new array
// Step 4: Return the new array

function reverseArray(a) {
    // a.reverse();
    // return a;

    // or 
    const reversedArray=[];
    for(let i=a.length-1; i>=0; i--){
        reversedArray.push(a[i]);
    }
    return reversedArray;
}
const arr=[1,4,3,2];
console.log(reverseArray(arr));
