const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input.shift().split(" ").map(Number);
let board = input.map((v) => v.split(""));

let sheep = 0;
let wolf = 0;
let visited = new Array(r).fill().map(() => new Array(c).fill(false));
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] !== "#" && !visited[i][j]) {
      let s = 0;
      let w = 0;
      let queue = [[i, j]];
      visited[i][j] = true;

      while (queue.length) {
        const [ci, cj] = queue.pop();

        if (board[ci][cj] === "k") s++;
        if (board[ci][cj] === "v") w++;

        for (let [di, dj] of [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ]) {
          const ni = ci + di;
          const nj = cj + dj;
          if (
            ni >= 0 &&
            ni < r &&
            nj >= 0 &&
            nj < c &&
            !visited[ni][nj] &&
            board[ni][nj] !== "#"
          ) {
            visited[ni][nj] = true;
            queue.push([ni, nj]);
          }
        }
      }

      // 양이 더 많으면 늑대가 잡아먹힘
      if (s > w) sheep += s;
      else wolf += w;
    }
  }
}

console.log(sheep, wolf);
