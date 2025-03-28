const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = new Array(n);
for (let i = 0; i < n; i++) {
  board[i] = input[i].split(" ").map(Number);
}

const bfs = (i, j) => {
  let queue = [[i, j, 0]];

  visited[i][j] = true;

  let cnt = 1;
  while (queue.length) {
    const [ii, jj] = queue.shift();

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = ii + di;
      const nj = jj + dj;
      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < m &&
        !visited[ni][nj] &&
        board[ni][nj]
      ) {
        visited[ni][nj] = true;
        queue.push([ni, nj]);
        cnt++;
      }
    }
  }

  return cnt;
};


let cnt = 0;
let maxSize = 0;
let visited = new Array(n).fill().map(() => new Array(m).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let size = 0;
      if (board[i][j] === 1 && !visited[i][j]) {
        cnt++
        size = bfs(i, j);
    }

    maxSize = Math.max(maxSize, size);
  }
}

console.log(cnt);
console.log(maxSize);

