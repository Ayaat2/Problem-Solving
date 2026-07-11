// Problem Statement

// Given a non-negative integer $n$, find the factorial of that integer using recursion .
// Key Concepts Explained
// What is a Factorial? The factorial of a non-negative integer $n$ (denoted as $n!$) is the product of all positive integers less than or equal to $n$ .
// Mathematical Fact: The factorial of 0 is always 1 ($0! = 1$)

// Examples Given

// Factorial of 4 ($4!$): $4 \times 3 \times 2 \times 1 = 24$
// Factorial of 5 ($5!$): $5 \times 4 \times 3 \times 2 \times 1 = 120$

// Algorithm to find the factorial of a number $n$ using recursion

// step 1: if n is 0, return 1 (base case)
// step 2: otherwise, return n multiplied by the factorial of (n-1) (recursive case)

const recursiveFactorial = (n) => {
  if (n === 0) return 1; // base case
  return n * recursiveFactorial(n - 1); // recursive case

  //     Example with n = 4:

  // 4 * recursiveFactorial(3)
  // 4 * 3 * recursiveFactorial(2)
  // 4 * 3 * 2 * recursiveFactorial(1)
  // 4 * 3 * 2 * 1 = 24
};
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120
console.log(recursiveFactorial(0)); // 1

// Note : 

// Time complexity: O(n)
// Because it makes one recursive call for each number from n down to 1.
// Space complexity: O(n)
// Because each recursive call is added to the call stack until it reaches the base case.