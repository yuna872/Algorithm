const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arr = input[1].split(" ").map(Number);

let dp = new Array(n).fill(1);

for (let i = n - 2; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    // 최대값 갱신
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));
