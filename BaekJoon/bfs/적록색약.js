const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let board = new Array(n);
for (let i = 0; i < n; i++) {
  board[i] = input[i].split("");
}

const bfs = (x, y, str) => {
  let queue = [[x, y]];
  visited[x][y] = true;
  while (queue.length) {
    const [i, j] = queue.shift();

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
        nj < n &&
        !visited[ni][nj] &&
        board[ni][nj] === str
      ) {
        queue.push([ni, nj]);
        visited[ni][nj] = true;
      }
    }
  }
};

let visited = new Array(n).fill().map(() => new Array(n));
let cnt1 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let str = board[i][j];

    if (!visited[i][j]) {
      cnt1++;
      bfs(i, j, str);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "G") board[i][j] = "R";
  }
}

visited = new Array(n).fill().map(() => new Array(n));
let cnt2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let str = board[i][j];
    if (!visited[i][j]) {
      cnt2++;
      bfs(i, j, str);
    }
  }
}

console.log(cnt1, cnt2);
