const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let spendTime = new Array(N);
for (let i = 0; i < N; i++) {
  spendTime[i] = input[i].split(" ").map(Number);
}

let dp = new Array(2).fill().map(() => new Array(N).fill(0));
dp[0][0] = spendTime[0][0];
dp[1][0] = spendTime[0][1];

for (let i = 1; i < N; i++) {
  // A
  dp[0][i] = Math.min(
    // A -> A
    dp[0][i - 1] + spendTime[i][0],
    // B -> A (이동시간 포함)
    dp[1][i - 1] + spendTime[i][0] + spendTime[i - 1][3]
  );

  // B
  dp[1][i] = Math.min(
    // B -> B
    dp[1][i - 1] + spendTime[i][1],
    // A -> B (이동시간 포함)
    dp[0][i - 1] + spendTime[i][1] + spendTime[i - 1][2]
  );
}

console.log(Math.min(dp[0][N - 1], dp[1][N - 1]));
