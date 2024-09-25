const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let board = [];
input.forEach((line) => {
  board.push(line.split("").map(Number));
});

const D = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let visited = new Array(N)
  .fill()
  .map(() => new Array(M).fill().map(() => false));


const bfs = (i, j) => {
  let queue = [[i, j, 1]];
  visited[i][j] = true;

  while (queue.length) {
    const [ci, cj, cnt] = queue.pop();

    if (ci === N - 1 && cj === M - 1) {
      return cnt;
    }

    for ([di, dj] of D) {
      let ni = ci + di;
      let nj = cj + dj;
      if (0 <= ni && ni < N && 0 <= nj && nj < M) {
        if (!visited[ni][nj] && board[ni][nj]) {
          queue.unshift([ni, nj, cnt+1]);
          visited[ni][nj] = true;
        }
      }
    }
  }
};

console.log(bfs(0, 0));
