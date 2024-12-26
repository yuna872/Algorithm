const { group } = require("console");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let answer = [];
let tree = [];
for (let i = 1; i < N + 1; i++) {
  tree[i] = [];
}

input.forEach((line) => {
  let [from, to] = line.split(" ").map(Number);

  tree[from].push(to);
  tree[to].push(from);
});

const bfs = (start) => {
  let queue = [start];
  let visited = new Array(N + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    let cur = queue.pop();

    for (let i = 0; i < tree[cur].length; i++) {
      let next = tree[cur][i];
      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.unshift(next);
      }
    }
  }
};

bfs(1)

answer.slice(2).forEach((v) => console.log(v))
