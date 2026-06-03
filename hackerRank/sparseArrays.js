// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// stringList = ['ab', 'ab', 'abc']
// queries = ['ab', 'abc', 'bc']

// There are  instances of 'ab',  of 'abc', and  of 'bc'. For each query, add an element to the return array:
// results= [2, 1, 0]

// Function Description

// Complete the function  with the following parameters:

// string stringList[n]: an array of strings to search
// string queries[q]: an array of query strings
// Returns

// int[q]: the results of each query
// Input Format

// The first line contains and integer n , the size of stringList[] .
// Each of the next  lines contains a string stringList[i] .
// The next line contains q, the size of queries[] .
// Each of the next q lines contains a string queries[i] .

// Constraints
// 1 <= n <= 1000
// 1 <= q <= 1000
// 1 <= length of stringList[i], queries[i] <= 20

// Sample Input 1

// Array: stringList
// aba
// baba
// aba
// xzxb

// Array: queries
// aba
// xzxb
// ab

// Sample Output 1

// 2
// 1
// 0
// Explanation 1

// Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all.

/* Steps to solve  */
// 1. Create an empty array to store the results.
// 2. Loop through each query string in the queries array.
// 3. For each query string, initialize a count variable to zero.
// 4. Loop through each string in the stringList array.
// 5. If the current string in stringList matches the query string, increment the count variable.
// 6. After looping through all strings in stringList, push the count variable to the results array.
// 7. Return the results array after processing all query strings.

function matchingStrings(stringList, queries) {
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < stringList.length; j++) {
      if (queries[i] === stringList[j]) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
}
console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]),
);
