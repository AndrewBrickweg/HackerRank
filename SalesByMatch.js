// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// sock.png

// There are three pairs of socks.

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(ar) {
  let numberSockPairs = 0;

  ar.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] == ar[i + 1]) {
      numberSockPairs++;
      i++;
    }
  }

  return numberSockPairs;
}

sockMerchant(ar);
