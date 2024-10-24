function maxMin(k, arr) {
  let maxMin = Infinity;

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i + (k - 1)] - arr[i];

    if (diff < maxMin) {
      maxMin = diff;
    }
  }

  return maxMin;
}

const arr = [10, 100, 300, 200, 1000, 20, 30];
const k = 3;

console.log(maxMin(k, arr));
