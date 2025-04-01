const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

let ladders = new Map();
for (let i = 0; i < n; i++) {
  const [from, to] = input.shift().split(" ").map(Number);
  ladders.set(from, to);
}

let snakes = new Map();
for (let i = 0; i < m; i++) {
  const [from, to] = input.shift().split(" ").map(Number);
  snakes.set(from, to);
}

const bfs = () => {
  let queue = [[1, 0]];

  let visited = new Array(101).fill(false);
  visited[1] = true;

  while (queue.length) {
    const [cur, cnt] = queue.shift();

    if (cur === 100) return cnt;

    for (let i = 1; i < 7; i++) {
      let next = cur + i;

      if (next > 100 || visited[next]) continue;

      if (ladders.has(next)) {
        next = ladders.get(next);
      }
      if (snakes.has(next)) {
        next = snakes.get(next);
      }

      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, cnt + 1]);
      }
    }
  }
};

console.log(bfs());
