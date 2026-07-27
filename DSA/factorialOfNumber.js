// Problem - Give an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

// input => an integer 'n'
// output => the factorial of that integer

// Edge Cases: 

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2 * 1 = 2
// factorial(3) = 3 * 2 * 1 = 6
// factorial(4) = 4 * 3 * 2 * 1 = 24
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// The algorithm to find the factorial of a number 'n':

// Initialize result = 1.
// Loop from 2 to n (inclusive).
// Multiply result by the current number.
// Return result.

const factorial=(n)=>{
    let result=1;

    for(let i=2; i <= n; i++){
        result *=i;
    }
    return result;
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24

// Note: 
// time complexity of this algorithm is O(n) and space complexity is O(1)