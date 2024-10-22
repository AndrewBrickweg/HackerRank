function minimumAbsoluteDifference(arr) {
  // Write your code here
  let minimumDifference = Infinity;

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minimumDifference) {
      minimumDifference = diff;
    }
  }

  return minimumDifference;
}
