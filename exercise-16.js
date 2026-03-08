/*
    Problem: 
        Write a javascript program to given a year, report if it is a leap year or not.
        A leap year is a year that is divisible by 4, 
        but not divisible by 100, unless it is also divisible by 400.
 */
// the steps to solve the problem are:
/* 1. Check if the year is divisible by 4, if it is not, then it is not a leap year.
   2. If the year is divisible by 4, then check if it is divisible by 100, 
    if it is not, then it is a leap year.
   3. If the year is divisible by 100, then check if it is divisible by 400, 
    if it is, then it is a leap year, otherwise it is not a leap year.
*/

const isLeapYear = (year) => {
    if(year % 4 !==0) return `${year} is not a leap year.`;
    if (year % 100 !==0) return `${year} is a leap year.`;
    if (year % 400 ===0) return `${year} is a leap year.`;
    return `${year} is not a leap year.`;
}
console.log(isLeapYear(2020)) // Output: "2020 is a leap year."
console.log(isLeapYear(2021)) // Output: "2021 is not a leap year."
console.log(isLeapYear(2025)) // Output: "2025 is not a leap year."
console.log(isLeapYear(2026)) // Output: "2026 is not a leap year."