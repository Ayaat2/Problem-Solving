// problem

// given an array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found.

// Example:
// Input: arr = [1, 2, 3, 4, 5], t = 3
// Output: 2

// Input: arr = [1, 2, 3, 4, 5], t = 6
// Output: -1

// Input: arr = [-5, 2, 10, 4, 6], t = 10
// Output: 2

/* The Algorithm: */
// 1. Start from the first element of the array
// 2. Compare the current element with the target element 't'
// 3. If they are equal, return the index of the current element
// 4. If they are not equal, move to the next element and repeat step 2
// 5. If the end of the array is reached and the target element is not found, return -1

const linearSearch=(arr,t)=>{
    for(let i=0; i < arr.length; i++){
        if(arr[i] === t){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));// 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6));// 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20));// -1