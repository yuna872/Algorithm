const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let [p1, p2] = input.shift().split(" ").map(Number);
let M = +input.shift();

let family = new Array(N + 1).fill().map(() => []);
input.forEach((line) => {
  let [parent, child] = line.split(" ").map(Number);

  family[parent].push(child);
  family[child].push(parent);
});

const bfs = (i, j) => {
  let visited = new Array(N + 1).fill().map(() => false);
  let queue = [[i, 0]];
  visited[i] = true;

  while (queue.length) {
    const [node, cnt] = queue.pop();

    if (node === j) {
      return cnt;
    }

    family[node].forEach((next) => {
      if (!visited[next]) {
        queue.unshift([next, cnt + 1]);
        visited[next] = true;
      }
    });
  }

  return -1;
};

console.log(bfs(p1, p2));
