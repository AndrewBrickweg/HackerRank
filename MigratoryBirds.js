// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds
// Input Format

// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.

// Constraints

// It is guaranteed that each type is , , , , or .

function migratoryBirds(arr) {
  //define relevant variables
  let maxFrequency = 0;
  let freqMap = new Map();
  let bird = Infinity;

  //loop through array and add values to a frequency hashmap
  for (let i = 0; i < arr.length; i++) {
    freqMap.has(arr[i])
      ? freqMap.set(arr[i], freqMap.get(arr[i]) + 1)
      : freqMap.set(arr[i], 1);
  }

  //find max frequency in list
  maxFrequency = Math.max(...freqMap.values());

  //return minimum key that has the max frequency value
  freqMap.forEach((value, key) => {
    if (value == maxFrequency && key < bird) {
      bird = key;
    }
  });

  return bird;
}

const ar = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

migratoryBirds(ar);
