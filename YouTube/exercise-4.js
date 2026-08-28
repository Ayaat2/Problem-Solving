/*
    write a javascript program to get the current date expected output : dd/mm/yyyy or dd-mm-yyyy
 */

// the steps :
// 1. create a new date object => new Date()
// 2. get the day => date.getDate()
// 3. get the month => date.getMonth() + 1 (because it starts from 0)
// 4. get the year => date.getFullYear()
// 5. format the date => `${day}/${month}/${year}`
const getCurrentDate = () => {
     const date= new Date();
     const day =date.getDate();
     const month=date.getMonth() + 1;
     const year=date.getFullYear();
     return `${day}/${month}/${year}`;
    
}
console.log(getCurrentDate()) // 17/06/2024