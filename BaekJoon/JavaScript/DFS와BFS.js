const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, V] = input.shift().split(" ").map(Number);

// 그래프 그리기
let graph = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0));

input.forEach((line) => {
  const [n1, n2] = line.split(" ").map(Number);

  graph[n1][n2] = graph[n2][n1] = 1;
});

let answer1 = [];
let visited = new Array(N + 1).fill().map(() => false);
const dfs = (v) => {
  visited[v] = true;
  answer1.push(v);

  for (let i = 1; i < N + 1; i++) {
    if (!visited[i] && graph[i][v]) dfs(i);
  }
};

let answer2 = [];
const bfs = (v) => {
  let visited = new Array(N + 1).fill().map(() => false);

  let queue = [v];
  visited[v] = true;

  while (queue.length) {
    let node = queue.pop();

    answer2.push(node)

    for (let i = 1; i < N + 1; i++) {
      if (!visited[i] && graph[node][i]) {
        queue.unshift(i);
        visited[i] = true;
      }
    }
  }
};

dfs(V);
bfs(V);

console.log(answer1.join(' '))
console.log(answer2.join(' '))
