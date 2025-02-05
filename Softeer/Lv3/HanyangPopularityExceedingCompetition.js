const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let people = [];

for (let i = 0; i < N; i++) {
  people[i] = input[i].split(" ").map(Number);
}

const dp = new Array(N).fill().map(() => [0, 0]);

dp[0][0] = people[0][0] <= people[0][1] ? 1 : 0;

for (let i = 1; i < N; i++) {
  let [pi, ci] = people[i];
  // 철민이의 현재 인기도
  let [p1, p2] = dp[i - 1];

  // 만나는 경우
  dp[i][0] = Math.max(
    Math.abs(pi - p1) <= ci ? p1 + 1 : p1,
    Math.abs(pi - p2) <= ci ? p2 + 1 : p2
  );
  // 만나지 않는 경우
  dp[i][1] = Math.max(p1, p2);
}

console.log(Math.max(...dp[N - 1]));
