/*
    problem: write a javaScript function to check if a given number is a prime number.
    A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
    The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...
 */
// the steps :
// for example : x = 7
// check if the number is less than 2, if yes return false
// loop from 2 to the number - 1
// check if the number is divisible by any of the numbers in the loop, if yes return false
// if the number is not divisible by any of the numbers in the loop, return true

const isPrime=(num)=>{
    if(num < 1) return false;
    for(let i=2; i < num; i++){
        if(num % i===0) return false;
    }
    return true;
}
console.log(isPrime(7)) // true
console.log(isPrime(10)) // false
console.log(isPrime(2)) // true
console.log(isPrime(1)) // false