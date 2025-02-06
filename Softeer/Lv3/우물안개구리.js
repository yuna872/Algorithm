const { on } = require("events");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let W = input.shift().split(" ").map(Number);

let graph = {};

for (let n = 1; n < N + 1; n++) {
  graph[n] = [];
}

for (let m = 0; m < M; m++) {
  let [p1, p2] = input[m].split(" ").map(Number);

  graph[p1].push(p2);
  graph[p2].push(p1);
}

let cnt = 0;
Object.entries(graph).map(([me, friends]) => {
  const best = friends.every((f) => W[me - 1] > W[f - 1]);
  if (best) cnt++;
});

console.log(cnt);
