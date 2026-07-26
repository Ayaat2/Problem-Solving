//📝 Problem

//  **Given a number `n`, return the first `n` numbers of the Fibonacci sequence.**
//  The Fibonacci sequence starts with **0** and **1**, and each subsequent number is the sum of the previous two numbers.

// Examples

// fibonacci(2)
// Output:
// [0, 1]

// fibonacci(3)
// Output:
// [0, 1, 1]

// fibonacci(7)
// Output:
// [0, 1, 1, 2, 3, 5, 8]

// the algorithm :

// 1. If n = 0 return []
// 2. If n = 1 return [0]
// 3. Initialize the array with the first start [0,1]
// 4. loop from index 2 up to n
// 5. Each time, calculate the sum of the last two numbers
// 6. Push the result
// 7. return the array.

const fibonacci=(n)=>{
  
  if(n===0) return [];
  if(n===1) return [0];

  let fib=[0,1];
  
  for(let i=2; i < n; i++){
    fib.push(fib[i-1] + fib[i-2]);
  }
  return fib;
}

console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [0]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

