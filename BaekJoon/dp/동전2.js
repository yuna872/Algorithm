const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

let dp = new Array(k + 1).fill(100001);
dp[0] = 0;

for (let coin of coins) {
  for (let i = coin; i < k + 1; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[k] === 100001 ? -1 : dp[k]);
