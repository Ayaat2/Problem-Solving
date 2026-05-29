// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// **Example**  

// arr=[1,3,5,7,9]

// The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24 . The function prints

// ```
// 16 24
// ```

// **Function Description**

// Complete the  function with the following parameter(s):

// - arr [5]: an array of  integers

// **Print**

// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4  of 5 elements.No value should be returned.

// **Note** For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

// **Input Format**

// A single line of five space-separated integers.

// **Constraints**

// **Sample Input**

// ```
// 1 2 3 4 5
// ```

// **Sample Output**

// ```
// 10 14
// ```

// **Explanation**

// The numbers are 1,2 , 3, 4, and 5 . Calculate the following sums using four of the five integers:

// 1. Sum everything except , the sum is 2 + 3+4+5=15.
// 2. Sum everything except , the sum is  1+2+3+4+5=13.
// 3. Sum everything except , the sum is 1+2+4+5=12 .
// 4. Sum everything except , the sum is 1+2+3+5=11 .
// 5. Sum everything except , the sum is 1+2+3+4=10.

// **Hints:** Beware of integer overflow! Use a 64-bit integer to store the sums.


/* setps to solve the problem*/
// 1. sort the array
// 2. sum the first 4 elements to get the minimum sum
// 3. sum the last 4 elements to get the maximum sum

function miniMaxSum(arr) {
    arr.sort((a,b)=> a-b);
    let minSum=0;
    let maxSum=0;
    
    // to ignore the largest element, I used the length of the array - 1, so it will sum the first 4 elements
    for(let i=0; i < arr.length-1; i++){
        minSum+=arr[i];        
    }
    // to ignore the smallest element, I started the loop from 1, so it will sum the last 4 elements
    for(let i=1; i < arr.length; i++){
        maxSum+=arr[i];        
    }

    console.log(minSum, maxSum); 
}

miniMaxSum([1,2,3,4,5]);
