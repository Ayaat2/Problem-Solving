// ## 📝 Problem Statement

// > **Given a number `n`, return the first `n` numbers of the Fibonacci sequence.**
// >
// > The Fibonacci sequence starts with **0** and **1**, and each subsequent number is the sum of the previous two numbers.

// ### Examples

// ```
// fibonacci(2)

// Output:
// [0, 1]
// ```

// ```
// fibonacci(3)

// Output:
// [0, 1, 1]
// ```

// ```
// fibonacci(7)

// Output:
// [0, 1, 1, 2, 3, 5, 8]

// the algorithm :

// Step 1: Initialize the array with the first two elements
// Step 2: Loop from index 2 up to n
// Step 3 & 4: Sum the last two elements and push to the array
// Step 5: Return the resulting array

const fibonacci = (n) => {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log(fibonacci(7)); // [ 0, 1, 1, 2, 3, 5, 8 ]
