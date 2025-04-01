const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

let dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  let maxV = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      maxV = Math.max(maxV, dp[j] + 1);
    }
  }
  dp[i] = maxV;
}

console.log(Math.max(...dp));
