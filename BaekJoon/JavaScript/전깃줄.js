const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
const lines = input.map((str) => str.split(" ").map(Number));
lines.sort((a, b) => a[0] - b[0]);

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
      if (lines[i][1] > lines[j][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));
