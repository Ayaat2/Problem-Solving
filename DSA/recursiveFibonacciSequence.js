// Problem Statement: 
// Given a number $n$, find the $nth$ element of the Fibonacci sequence.

// Understanding the Fibonacci Sequence
// The Fibonacci sequence is a set of numbers where each number is the sum of the two preceding ones.
// The sequence typically starts as: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Mathematically, it can be defined as:
// F_0 = 0
// F_1 = 1
// F_n = F_{n-1} + F_{n-2} \text{ for } n > 1

// Examples
// recursiveFibonacci(0) should return 0
// recursiveFibonacci(1) should return 1
// recursiveFibonacci(6) should return 8

// tips for recursive solutions:
// figure out how to break down the problem into smaller versions of the same problem
// identify the base case for the recursion

/* the algorithm for the recursive Fibonacci function can be defined as follows: */

// step 1: If n is less than 2, return n (base case)
// step 2: Otherwise, return the sum of the (n-1)th and (n-2)th Fibonacci numbers

const recursiveFibonacci = (n) => {
    // Base case: return n if n is 0 or 1
    if(n < 2) return n; 
    // Recursive case: sum of the two preceding Fibonacci numbers
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13
console.log(recursiveFibonacci(1)); // 1

// Note: 
// time complexity of this recursive solution is O(2^n) due to the repeated calculations of the same Fibonacci numbers.
// space complexity is O(n) due to the call stack of the recursion.