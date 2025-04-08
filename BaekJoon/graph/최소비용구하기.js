const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const m = +input.shift();

let edges = new Array(m);
for (let i = 0; i < m; i++) {
  edges[i] = input[i].split(" ").map(Number);
}

let [start, end] = input[m].split(" ").map(Number);

let d = new Array(n + 1).fill(Infinity);
d[start] = 0;

for (let edge of edges) {
    const [from, to, cost] = edge;
    
}
