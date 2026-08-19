// Problem Statement

// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array .
// Return -1 if the element is not found.
// Important Note: Binary search only works on a sorted array.
// If you do not have a sorted array, you can choose to use linear search or sort the array first and then apply binary search.

// Examples:

// Using a sorted array [-5, 2, 4, 6, 10]:
// Target 't' = 10': Returns 4 because 10 is at index 4.
// Target 't' = 6': Returns 3 because 6 is at index 3.
// Target 't' = 20': Returns -1 because 20 is not present in the array.

/* algorithm for binary search:*/

// 1. Set two pointers, leftIndex and rightIndex, to the start and end of the array respectively.
// 2. while leftIndex pointer is less than or equal to rightIndex pointer, do the following:
// 3. Calculate the middle index of the array using the formula: mid = (leftIndex + rightIndex) / 2.
// 4. If the element at the middle index is equal to the target element, return the middle index.
// 5. If the element at the middle index is less than the target element, move the leftIndex pointer to mid + 1.
// 6. If the element at the middle index is greater than the target element, move the rightIndex pointer to mid - 1.
// 7. If the target element is not found in the array, return -1.

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }

  return -1;
};

const arr = [-5, 2, 4, 6, 10];
const target1 = 10;
const target2 = 6;
const target3 = 20;
console.log(binarySearch(arr, target1)); // Output: 4
console.log(binarySearch(arr, target2)); // Output: 3
console.log(binarySearch(arr, target3)); // Output: -1

/* Note: */
// The time complexity of binary search is O(log n) and the space complexity is O(1).
