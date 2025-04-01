const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, K] = input.shift().split(" ").map(Number);
let board = new Array(n);
for (let i = 0; i < n; i++) {
  board[i] = input[i].split(" ").map(Number);
}

let virus = {};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] > 0) {
      if (!virus[board[i][j]]) virus[board[i][j]] = [[i, j]];
      else virus[board[i][j]].push([i, j]);
    }
  }
}

let [s, x, y] = input[n].split(" ").map(Number);

let second = 0;

while (second < s) {
  for (let [key, values] of Object.entries(virus)) {
    let newQ = [];

    for (let [i, j] of values) {
      for (let [di, dj] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        const ni = i + di;
        const nj = j + dj;
        if (ni >= 0 && ni < n && nj >= 0 && nj < n && board[ni][nj] === 0) {
          board[ni][nj] = Number(key);
          newQ.push([ni, nj]);
        }
      }
    }

    virus[key] = newQ;
  }
  second++;
}

console.log(board[x - 1][y - 1]);
