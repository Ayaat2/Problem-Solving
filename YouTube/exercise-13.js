/* 
    problem: 
    Write a JavaScript program to check whether a given array of integers is sorted in ascending order.
*/

// the steps to solve the problem are:
// 1. create a function that takes an array of integers as input.
// 2. you should loop through the array and compare each element with the next one to check if they are in ascending order.
// 3. if any element is greater than the next one, return false, otherwise return true.

const isSorted =(arr)=>{
    // const sortedArr = arr.slice().sort((a,b)=> a - b);
    // return JSON.stringify(arr) === JSON.stringify(sortedArr);
    for(let i=0; i < arr.length - 1; i++)
        if(arr[i] > arr[i + 1]){
            return false;
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5, 6])) // Output: true
console.log(isSorted([1, 2, 3, 5, 4, 6])) // Output: false
console.log(isSorted(["a", "b", "c"])) // Output: true
console.log(isSorted(["a", "c", "b"])) // Output: false