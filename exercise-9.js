/* 
    Problem:
Given two numbers, determine which one is nearest to 100.
*/

/* The steps: */
// Take two input numbers: num1 and num2
/* Calculate the distance between each number and 100. 
    To do that: 
    Subtract each number from 100 
    Take the absolute value (because distance cannot be negative)
    distance1 = |100 - num1|
    distance2 = |100 - num2|
 */
/*
    Compare the two distances.
        If distance1 is smaller than distance2, then num1 is nearer to 100.
        If distance2 is smaller than distance1, then num2 is nearer to 100.
        If both distances are equal, then both numbers are equally near to 100.
 */


const nearestTo100=(num1,num2)=>{
    const distance1= Math.abs(100 - num1);
    const distance2= Math.abs(100 - num2);
    if(distance1 < distance2){
        return `${num1} is nearer to 100 than ${num2}`;
    }
    else if(distance2 < distance1){
        return `${num2} is nearer to 100 than ${num1}`;
    }
    else{
        return `Both ${num1} and ${num2} are equally near to 100`;
    }
}
console.log(nearestTo100(50,100));
console.log(nearestTo100(100,50));
console.log(nearestTo100(100,100));
