const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

const inputArr = input.map((v) => v.split(" ").map(Number));

const D = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const dfs = (i, j, M, N) => {
  visited[i][j] = true;

  for (const dir of D) {
    const [row, col] = dir;
    const ni = i + row;
    const nj = j + col;
    if (ni < M && nj < N && 0 <= ni && 0 <= nj) {
      if (board[ni][nj] === 1 && !visited[ni][nj]) {
        dfs(ni, nj, M, N);
      }
    }
  }
};

let board = [];
let visited = [];
for (let t = 0; t < T; t++) {
  let cnt = 0;
  let [M, N, K] = inputArr.shift();
  board = new Array(M).fill().map(() => new Array(N).fill(0));
  visited = new Array(M).fill().map(() => new Array(N).fill(false));

  while (K > 0) {
    K--;
    const [i, j] = inputArr.shift();
    board[i][j] = 1;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        dfs(i, j, M, N);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
