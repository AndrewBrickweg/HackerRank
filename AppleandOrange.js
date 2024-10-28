function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  // console.log(apples, oranges, a, b);
  // check apple distance
  for (let i = 0; i < apples.length; i++) {
    apples[i] = a + apples[i];
  }

  // check orange distance
  for (let i = 0; i < oranges.length; i++) {
    oranges[i] = b + oranges[i];
  }

  // console.log(apples, oranges, s, t);
  // check distances to house and print number apples, oranges
  apples.forEach((apple) => {
    if (apple >= s && apple <= t) {
      appleCount++;
    }
  });

  oranges.forEach((orange) => {
    if (orange >= s && orange <= t) {
      orangeCount++;
    }
  });

  console.log(appleCount);
  console.log(orangeCount);
}
