const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, dist] = input.shift().split(" ").map(Number);
const roads = input.map((v) => v.split(" ").map(Number));

let dp = new Array(dist + 1).fill(Infinity);
let graph = new Array(dist + 1).fill().map(() => new Array());

for (let road of roads) {
  const [from, to, len] = road;
  if (to - from <= len || to > dist) continue;
  graph[from].push([to, len]);
}

dp[0] = 0;

for (let i = 0; i < dist + 1; i++) {
  if (i > 0) dp[i] = Math.min(dp[i - 1] + 1, dp[i]);

  for (let road of graph[i]) {
    const [to, len] = road;
    if (dp[to] > len + dp[i]) {
      dp[to] = len + dp[i];
    }
  }
}

console.log(dp[dist]);
