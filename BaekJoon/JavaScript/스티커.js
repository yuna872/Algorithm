const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input.shift();

for (let t = 0; t < T; t++) {
  let N = +input.shift();

  let stickers = [];
  for (let i = 0; i < 2; i++) {
    stickers.push(input.shift().split(" ").map(Number));
  }

  console.log(solution(N, stickers));
}

function solution(N, stickers) {
  /* 
    N * 3의 dp 배열 생성
    1행 : 아무 스티커도 떼지 않은 경우
    2행 : 위쪽 스티커를 떼는 경우
    3행 : 아래쪽 스티커를 떼는 경우 
  */
  let dp = new Array(3).fill().map(() => new Array(N).fill(0));

  dp[0][0] = 0;
  dp[1][0] = stickers[0][0];
  dp[2][0] = stickers[1][0];

  for (let i = 1; i < N; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1], dp[2][i - 1]); // 아무 스티커도 떼지 않는 경우
    dp[1][i] = Math.max(dp[0][i - 1], dp[2][i - 1]) + stickers[0][i];
    dp[2][i] = Math.max(dp[0][i - 1], dp[1][i - 1]) + stickers[1][i];
  }

  return Math.max(dp[0][N - 1], dp[1][N - 1], dp[2][N - 1]);
}
