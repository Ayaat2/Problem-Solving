/*
    problem: 
        write a javascript program to convert a comma-separated values (CSV) string to a 2D array of values.
        For example, the string "a,b,c\nd,e,f\ng,h,i" 
        should be converted to the array [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]].
 */
// the steps to solve the problem are:
/* 1. Split the CSV string into an array of rows using the split() method with the newline character as the separator.
   2. Loop through the array of rows and split each row into an array of values using the split() method with the comma character as the separator.
   3. Return the 2D array of values.
*/

const csvToArray=(csv)=>{
    const rows=csv.split("\n");
    const result=[];
    for(let row of rows){
        const values=row.split(",");
        result.push(values);
    }
    return result;
}
console.log(csvToArray("a,b,c\nd,e,f\ng,h,i")) // Output: [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
console.log(csvToArray("1,2,3\n4,5,6\n7,8,9")) // Output: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
console.log(csvToArray("x,y,z\np,q,r\ns,t,u")) // Output: [["x", "y", "z"], ["p", "q", "r"], ["s", "t", "u"]]