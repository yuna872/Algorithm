const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const W = new Array(N);
const V = new Array(N);
for (let i = 0; i < N; i++) {
  let [w, v] = input[i].split(" ").map(Number);
  W[i] = w;
  V[i] = v;
}

let dp = new Array(N + 1).fill().map(() => new Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  let w = W[i - 1];
  let v = V[i - 1];
  for (let j = 1; j <= K; j++) {
    if (j - w >= 0) dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
    else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][K]);
