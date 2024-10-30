const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [W, N] = input.shift().split(" ").map(Number);
let graph = [];
for (let n = 0; n < N; n++) {
  graph[n] = input.shift().split(" ").map(Number);
}

graph.sort((a, b) => b[1] - a[1]);

let answer = 0;
for (let i = 0; i < graph.length; i++) {
  if (W === 0) continue;
  let [weight, price] = graph[i];
  if (weight < W) {
    W -= weight;
    answer += price * weight;
  } else {
    answer += price * W;
    W = 0;
  }
}

console.log(answer);
