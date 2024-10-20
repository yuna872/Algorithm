const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let costs = new Array(N);
for (let i = 0; i < N; i++) {
  costs[i] = input.shift().split(" ").map(Number);
}

const solution = (N, costs) => {
  let dp = new Array(N);

  dp[0] = costs[0];

  for (let i = 1; i < N; i++) {
    dp[i] = [
      costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]),
      costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]),
      costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]),
    ];
  }

  console.log(Math.min(...dp[N - 1]));
};

solution(N, costs);
