// "Given a natural number $n$, determine if the number is prime or not.
// "What is a Prime Number?
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers (it is only divisible by 1 and itself, such as 2, 3, 5, 7, 11).
// 
// Expected 
// Outputs:isPrime(5) ➡️ true (5 is a prime number)
// isPrime(4) ➡️ false (4 is divisible by 2)

// The algorithm to check if a number 'n' is prime is as follows:
// step 1: If 'n' is less than or equal to 1, return false (not prime)
// step 2: loop from 2 to the square root of 'n' and check if 'n' is divisible by any number in that range. If it is, return false (not prime)

const isPrime=(n)=>{
    if(n<=1) return false;

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
    
}
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Note:
// time complexity of this algorithm is O(sqrt(n)) and space complexity is O(1)