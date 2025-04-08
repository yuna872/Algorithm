const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const items = input.map((v) => v.split(" ").map(Number));

let dp = new Array(k + 1).fill(0);

for (let item of items) {
  const [w, v] = item;
  for (let i = k; i > 0; i--) {
    if (i - w >= 0) {
      dp[i] = Math.max(dp[i], dp[i - w] + v);
    }
  }
}

console.log(dp[k]);
