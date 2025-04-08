const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.shift().split(" ").map(Number);
let board = input.map((v) => v.split(" ").map(Number));

const bfs = (si, sj) => {
  let queue = [[si, sj, 0]];
  visited[si][sj] = true;

  while (queue.length) {
    const [i, j, cnt] = queue.shift();

    board[i][j] = cnt;

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < m &&
        !visited[ni][nj] &&
        board[ni][nj] === 1
      ) {
        visited[ni][nj] = true;
        queue.push([ni, nj, cnt + 1]);
      }
    }
  }
};

let visited = new Array(n).fill().map(() => new Array(m).fill(false));
let si;
let sj;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 2) {
      si = i;
      sj = j;
    }
  }
}

bfs(si, sj);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && board[i][j] === 1) board[i][j] = -1;
  }
}

board.forEach((arr) => {
  console.log(arr.join(" "));
});
