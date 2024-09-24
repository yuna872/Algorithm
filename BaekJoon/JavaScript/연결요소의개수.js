const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let graph = new Array(N + 1).fill().map(() => []);

input.forEach((edge) => {
  const [n1, n2] = edge.split(" ").map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
});

let visited = new Array(N + 1).fill().map(() => false);

const dfs = (i) => {
    visited[i] = true
    
    for(node of graph[i]) {
        if(!visited[node]) dfs(node)
    }
};

let answer = 0;
for (let i = 1; i < N + 1; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++
  }
}

console.log(answer)
