const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let board = input.map((v) => v.split("").map(Number));

const bfs = (board, visited) => {
  let queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length) {
    const [i, j, cnt] = queue.shift();

    if (i === N - 1 && j === M - 1) return cnt;

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        board[ni][nj] === 0 &&
        !visited[ni][nj]
      ) {
        queue.push([ni, nj, cnt + 1]);
        visited[ni][nj] = true;
      }
    }
  }

  return -1;
};

let minCnt = Infinity;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 벽 한개 부수고 시작~
    if (board[i][j] === 1) board[i][j] = 0;

    let visited = new Array(N).fill().map(() => new Array(M).fill(false));

    const cnt = bfs(board, visited);

    if (cnt !== -1) minCnt = Math.min(minCnt, cnt);

    // 부순 벽 돌려주기
    board[i][j] = 1;
  }
}

console.log(minCnt === Infinity ? -1 : minCnt);
