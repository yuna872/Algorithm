const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const cards = [0, ...input[1].split(" ").map(Number)];

let dp = new Array(n + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j]) + cards[j];
  }
}

console.log(dp);
