// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example

// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()

function birthday(s, d, m) {
  let count = 0;
  let currentSum = 0;

  // Calculate the sum of the first window of size m
  for (let i = 0; i < m; i++) {
    currentSum += s[i];
  }

  // Check if the first window sum equals d
  if (currentSum === d) count++;

  // Slide the window across the array
  for (let i = m; i < s.length; i++) {
    // Slide the window: subtract the element that goes out of the window, and add the new element
    currentSum = currentSum - s[i - m] + s[i];

    // Check if the current window sum equals d
    if (currentSum === d) count++;
  }

  return count;
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

birthday(s, d, m);
