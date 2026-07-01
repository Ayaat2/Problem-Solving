// Problem - Give an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2 * 1 = 2
// factorial(3) = 3 * 2 * 1 = 6
// factorial(4) = 4 * 3 * 2 * 1 = 24
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// The algorithm to find the factorial of a number 'n' is as follows:

// Step 1: Initialize a variable 'result' to 1
// Step 2: loop from 1 to 'n' and multiply 'result' by the current number in each iteration

const factorial=(n) => {
    let result=1;
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Note: 
// time complexity of this algorithm is O(n) and space complexity is O(1)