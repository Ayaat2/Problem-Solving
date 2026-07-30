// "Given a natural number $n$, determine if the number is prime or not.
// "What is a Prime Number?
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers (it is only divisible by 1 and itself, such as 2, 3, 5, 7, 11).
// 
// Expected 
// Outputs:isPrime(5) ➡️ true (5 is a prime number)
// isPrime(4) ➡️ false (4 is divisible by 2)

// the input is number
// the outpust is boolean
// time complexity = O(n) 
// space complexity = O(1)

// The algorithm to check if a number 'n' is prime is as follows:
// 1. If the number less or equal 1 return false (not prime)
// 2. loop from index 2 to the square root of 'n' 
// 3. check if the number % i === 0
// 4. if the number === 0 , return false (not prime) 
// 5. if not accepted return true (prime)



const isPrime=(n)=>{
    if(n <=1) return false // not prime

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0) return false // not prime
    }
    return true;
    
}
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true

// Note:
// Time Complexity = O(√n) (this faster than O(n))
//  space complexity = O(1)