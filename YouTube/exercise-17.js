/*
    problem: 
        write a javascript program to compare to objects to determine 
        if the first one contains the same properties as the second one(which may also have additional properties), regardless of their values.
 */


// the steps to solve the problem are:
/* 1. Get the keys of both objects using Object.keys() method.
   2. Check if the length of the keys of the first object is less than or equal to the length of the keys of the second object, if it is not, then return false.
   3. Loop through the keys of the first object and check if each key is present in the keys of the second object, if it is not, then return false.
   4. If all keys of the first object are present in the keys of the second object, then return true.
*/

const obj1={a:1,b:2,c:3}
const obj2={a:1,b:1,c:3}
const obj3={a:1,b:2,c:3,d:1}
const obj4={a:1,b:2}
const obj5={a:1,b:2,c:3,d:1,e:1}

const compareObjects=(obj1,obj2)=>{
    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);

    if(keys1.length > keys2.length) return false;
    for(let key of keys1){
        if(!keys2.includes(key)) return false;
    }
    return true;
}
console.log(compareObjects(obj1,obj2)) // Output: true
console.log(compareObjects(obj1,obj3)) // Output: true
console.log(compareObjects(obj2,obj3)) // Output: true
console.log(compareObjects(obj1,obj4)) // Output: false
console.log(compareObjects(obj1,obj5)) // Output: true