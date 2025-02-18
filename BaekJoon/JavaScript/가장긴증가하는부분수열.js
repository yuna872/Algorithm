const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);

let dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  let maxV = 0;
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      maxV = Math.max(maxV, dp[j]);
    }
  }

  dp[i] += maxV;
}

console.log(Math.max(...dp));
