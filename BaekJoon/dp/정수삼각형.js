const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const triangle = new Array(n);
for (let i = 0; i < n; i++) {
  triangle[i] = input[i].split(" ").map(Number);
}
let dp = new Array(n).fill().map((_, idx) => new Array(idx + 1));
dp[0][0] = triangle[0][0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      // 오른쪽 대각선
      dp[i][j] = triangle[i][j] + dp[i - 1][j];
    } else if (i === j) {
      // 왼쪽 대각선
      dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
    } else {
      // 양 대각선
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
