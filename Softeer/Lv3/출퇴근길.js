const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let adj = new Map();
// 역방향 그래프
let adjR = new Map();
for (let m = 0; m < M; m++) {
  let [from, to] = input[m].split(" ").map(Number);

  if (!adj.has(from)) adj.set(from, [to]);
  else adj.get(from).push(to);

  if (!adjR.has(to)) adjR.set(to, [from]);
  else adjR.get(to).push(from);
}

let [S, T] = input[M].split(" ").map(Number);

const dfs = (now, adj, visited) => {
  if (visited[now]) return;

  visited[now] = true;
  // 인접 리스트 방문
  for (let neighbor of adj.get(now)) {
    dfs(neighbor, adj, visited);
  }

  return;
};

let fromS = new Array(N + 1).fill(false);
// 미리 방문처리 해주기
fromS[T] = true;
dfs(S, adj, fromS);

let fromT = new Array(N + 1).fill(false);
fromT[S] = true;
dfs(T, adj, fromT);

let toS = new Array(N + 1).fill(false);
dfs(S, adjR, toS);

let toT = new Array(N + 1).fill(false);
dfs(T, adjR, toT);

let cnt = 0;
for (let i = 1; i < N + 1; i++) {
  if (fromS[i] && fromT[i] && toS[i] && toT[i]) {
    cnt++;
  }
}

console.log(cnt - 2);
