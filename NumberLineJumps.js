function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const t = (x2 - x1) / (v1 - v2);
  return Number.isInteger(t) && t >= 0 ? "YES" : "NO";
}

const x1 = 240;
const v1 = 575;
const x2 = 9179;
const v2 = 9986;

kangaroo(x1, v1, x2, v2);
