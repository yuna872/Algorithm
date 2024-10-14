const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let stairs = input.map(Number);

let dp = new Array(N).fill(0);
function solution(N, stairs, dp) {
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      dp[i - 2] + stairs[i], // 현재 O, 이전 계단 X
      dp[i - 3] + stairs[i - 1] + stairs[i] // 현재 O, 이전 계단 O, 전전 계단X
    );
  }
}

solution(N, stairs, dp);
console.log(dp[N - 1]);
