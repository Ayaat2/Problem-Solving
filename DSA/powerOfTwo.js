// The problem: 

// Given a positive integer $n$, determine if the integer is a power of two or not. An integer is a power of two if there exists an integer $x$ such that $n = 2^x$.
// Examples:
// isPowerOfTwo(1) = true (since $2^0 = 1$)
// isPowerOfTwo(2) = true (since $2^1 = 2$)
// isPowerOfTwo(5) = false

// n = 8
// 8 / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
// Since we reached 1, 8 is a power of two

// n=9
// 9 / 2 = 4.5 (not divisible by 2)
// Since 9 is not divisible by 2, it is not a power of two

/* The algorithm to check if a number 'n' is a power of two is as follows:*/

// step 1: if 'n' is less than or equal to 0, return false (not a power of two)
// step 2: loop while 'n' is greater than 1, divide 'n' by 2 and check if 'n' is divisible by 2. 
// if 'n' is not divisible by 2, return false (not a power of two).
// step 3: if we reach 1, return true (it is a power of two)

const isPowerOfTwo = (n) => {
    if(n<0) return false;

    while(n>1){
        if(n % 2 !==0) return false;
        n= n / 2;
    }
    return true;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Note:
// time complexity of this algorithm is O(log n) and space complexity is O(1)