const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

let dp = new Array(n).fill().map(() => new Array(3).fill(0));

dp[0] = [1, 1, 1];
for (let i = 1; i < n; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}

const answer = dp[n - 1].reduce((acc, cur) => acc + cur, 0);

console.log(answer % 9901);
