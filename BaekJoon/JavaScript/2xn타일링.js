const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = +input;

function solution(N) {
  let dp = new Array(N + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[N]);
}

solution(N);
