// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example

// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion
// Input Format

// The first line contains a single integer , the size of the array .
// The second line contains  space-separated integers, each an .

// Constraints

// The answer will be .

function pickingNumbers(a) {
  let maxCount = 0;
  let freqMap = new Map();

  for (let num of a) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  freqMap.forEach((value, key) => {
    let currentCount = value + (freqMap.get(key + 1) || 0);
    maxCount = Math.max(maxCount, currentCount);
  });

  return maxCount;
}

const a = [1, 2, 2, 3, 1, 2];

pickingNumbers(a);
