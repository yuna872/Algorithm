const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = input.shift().split(" ").map(Number);
}

let path = input.map((line) => line.split(" ").map((v) => Number(v) - 1));
let start = path[0];
let end = path[M - 1];

let visited = new Array(N).fill().map(() => new Array(N).fill(false));

let answer = 0;
const dfs = (i, j, queue, visited) => {
  // 도착했을 경우
  if (i === end[0] && j === end[1]) {
    // 도착 지점
    if (queue.length === 0) answer++; // 방문해야 할 노드를 순서대로 다 방문했다면 경로 추가
    return;
  }

  // 아직 도착하지 않은 경우
  let newQueue = queue.slice();
  let tmp = null;
  // 방문 해야 하는 노드 인 경우
  if (newQueue.length && i === newQueue[0][0] && j === newQueue[0][1]) {
    tmp = newQueue.shift(); // 노드 제거
  }

  for (let [di, dj] of [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]) {
    let ni = i + di;
    let nj = j + dj;
    if (
      ni >= 0 &&
      ni < N &&
      nj >= 0 &&
      nj < N &&
      !visited[ni][nj] &&
      board[ni][nj] === 0
    ) {
      visited[ni][nj] = true;
      dfs(ni, nj, newQueue, visited);
      visited[ni][nj] = false;
    }
  }
};

visited[start[0]][start[1]] = true;
dfs(start[0], start[1], path.slice(1, M - 1), visited);

console.log(answer);
