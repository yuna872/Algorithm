const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let board = new Array(N).fill();
for (let i = 0; i < N; i++) {
  board[i] = input[i].split(" ").map((e) => +e);
}

function solution(N, board) {
  let dp = new Array(N).fill().map(() => new Array(N).fill(BigInt(0)));

  dp[0][0] = 1

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let step = board[i][j];

      if(step === 0) continue;
      if (i + step < N) {
        dp[i + step][j] += BigInt(dp[i][j]);
      }

      if (j + step < N) {
        dp[i][j + step] += BigInt(dp[i][j]);
      }
    }
  }

  console.log(dp[N-1][N-1].toString());
}

solution(N, board);
