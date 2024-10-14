const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let glasses = input.map((glass) => +glass);
let maxV = 0;

let dp = new Array(N).fill(0);
function solution(N, glasses, dp) {
  dp[0] = glasses[0];
  dp[1] = Math.max(dp[0] + glasses[1], glasses[1]); // 0번 1번 마시는 경우, 1번만 마시는 경우
  dp[2] = Math.max(dp[1], dp[0] + glasses[2], glasses[1] + glasses[2]);

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      dp[i - 1], // 현재 잔 마시지 않는 경우
      // 현재 잔을 마시는 경우
      dp[i - 2] + glasses[i], // 1. 이전 잔 X
      dp[i - 3] + glasses[i - 1] + glasses[i] // 2. 전전잔 X & 이전잔 O
    );
  }

  return dp[N - 1];
}

console.log(solution(N, glasses, dp));

// const dfs = (index, total, cnt) => {

//   if (index >= N) {
//     if (maxV < total) maxV = total;
//     return;
//   }

//   // 현재 위치하고 있는 포도주를 마시는 경우
//   if(cnt < 2) dfs(index + 1, total + glasses[index], cnt + 1);

//   // 마시지 않는 경우
//   dfs(index + 1, total, 0);
// };

// dfs(0, 0, 0);
