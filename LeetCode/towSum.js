// # Problem 1

// Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.
// You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.
// You can return the answer in any order.

// **Example 1:**

// **Input:** nums = [2,7,11,15], target = 9
// **Output:** [0,1]
// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

// **Example 2:**

// **Input:** nums = [3,2,4], target = 6
// **Output:** [1,2]

// **Example 3:**

// **Input:** nums = [3,3], target = 6
// **Output:** [0,1]

// Topics: Array, Hash Table

// ## 🧠 Understanding the Problem
// - Input:  nums=[2,9,5], target=7
// - Output:  [0,2] index of two numbers    
// - Explanation: Because nums[0] + nums[2] == 7, we return [0, 2].
// - Constraints: each input has exactly one solution 


/* Pseudocode */
// 1. Create an empty map to store numbers and their indices
// 2. Iterate through the array
// 3. For each element:
//     - Compute the difference = target - current element
//     - Check if the difference exists in the map
//         - If yes, return the stored index and current index
    // - Otherwise, store the current element with its index in the map

/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum=(nums, target)=> {
    let map={};
    
    for(let i=0; i< nums.length; i++){
        const diff=target - nums[i];
        if(map.hasOwnProperty(diff)){
            return [map[diff],i]
        }
        map[nums[i]]=i;
    }
    return [];
};
console.log(twoSum([2,3,4], 3)) // []
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]