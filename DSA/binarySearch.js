// Problem Statement:
// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the element is not found.

// Important Note: 
// Binary search ONLY works on a sorted array.
// If the array is unsorted, either use linear search O(n) or sort it first O(n log n).

// Core Concept (Divide and Conquer):
// Instead of scanning sequentially, Binary Search repeatedly halves the search space
// by comparing the target with the middle element.

// Examples:
// Using sorted array arr = [-5, 2, 4, 6, 10]:
// Target 't' = 10 -> Returns 4 (10 is at index 4)
// Target 't' = 6  -> Returns 3 (6 is at index 3)
// Target 't' = 20 -> Returns -1 (20 is not present)

/* Algorithm Steps:
   1. Set two pointers: leftIndex at start (0) and rightIndex at end (arr.length - 1).
   2. While leftIndex <= rightIndex:
      a. Find the middle index: mid = Math.floor((leftIndex + rightIndex) / 2)
      b. If arr[mid] === target -> Target found! Return mid.
      c. If arr[mid] < target   -> Target is in the right half, discard left: leftIndex = mid + 1.
      d. If arr[mid] > target   -> Target is in the left half, discard right: rightIndex = mid - 1.
   3. If the loop ends without finding target (leftIndex > rightIndex), return -1.
*/

const binarySearch = (arr, target) => {
  // Step 1: Initialize pointers defining the search boundary
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // Step 2: Continue while the search window is valid
  while (leftIndex <= rightIndex) {
    // Calculate the middle index (Math.floor handles odd lengths by rounding down)
    const mid = Math.floor((leftIndex + rightIndex) / 2);

    // Case 1: Found the target at the middle position
    if (arr[mid] === target) {
      return mid;
    }

    // Case 2: Target is greater than the middle element
    // Discard the left half by moving leftIndex past mid
    if (arr[mid] < target) {
      leftIndex = mid + 1;
    } 
    // Case 3: Target is smaller than the middle element
    // Discard the right half by moving rightIndex before mid
    else {
      rightIndex = mid - 1;
    }
  }

  // Step 3: Search space exhausted; target is not in the array
  return -1;
};

// --- Execution & Test Cases ---
const arr = [-5, 2, 4, 6, 10];
const target1 = 10;
const target2 = 6;
const target3 = 20;

console.log(binarySearch(arr, target1)); // Output: 4
console.log(binarySearch(arr, target2)); // Output: 3
console.log(binarySearch(arr, target3)); // Output: -1

/*
--- Step-by-Step Trace (Dry Run) ---

Example 1: Finding target = 6 in [-5, 2, 4, 6, 10]
- Iteration 1:
    left = 0, right = 4 -> mid = floor((0 + 4) / 2) = 2
    arr[2] = 4
    4 < 6 -> Target is larger, discard left half -> left = mid + 1 = 3
- Iteration 2:
    left = 3, right = 4 -> mid = floor((3 + 4) / 2) = 3
    arr[3] = 6
    6 === 6 -> Match found! Return index 3.

Example 2: Finding target = 20 (Not in array)
- Iteration 1: left = 0, right = 4, mid = 2 (arr[2]=4)  -> 4 < 20  -> left = 3
- Iteration 2: left = 3, right = 4, mid = 3 (arr[3]=6)  -> 6 < 20  -> left = 4
- Iteration 3: left = 4, right = 4, mid = 4 (arr[4]=10) -> 10 < 20 -> left = 5
- Loop ends: left (5) > right (4) -> Returns -1.

--- Complexity Analysis ---
- Time Complexity: O(log n) -> The search space is divided by 2 in each iteration.
- Space Complexity: O(1)   -> Only a few pointer variables (leftIndex, rightIndex, mid) are used.
*/
