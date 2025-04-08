const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const honey = input[1].split(" ").map(Number);

let sumArr = new Array(n);
sumArr[0] = honey[0];
for (let i = 1; i < n; i++) {
  sumArr[i] = honey[i] + sumArr[i - 1];
}

let maxHoney = 0;
for (let i = 0; i < n; i++) {
    // 벌 벌 꿀통
    let total1 = sumArr[n - 1] - honey[i] - honey[0] + sumArr[n - 1] - sumArr[i];
    maxHoney = Math.max(maxHoney, total1, total2, total3)
}
let sum1 = (sumArr[n - 1] - sumArr[1]) * 2;
// 벌 꿀통 벌
let sum2 = 0;
for (let i = 0; i < n; i++) {
  if (sum2 < sumArr[i] + sumArr[n - i - 1])
    sum2 = sumArr[i] + sumArr[n - i - 1];
}

sum2 -= honey[0] + honey[n - 1];
// 꿀통 벌 벌
let sum3 = (sumArr[n - 1] - honey[n - 1] - honey[n - 2]) * 2;

console.log(Math.max(sum1, sum2, sum3));
