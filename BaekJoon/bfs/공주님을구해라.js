const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, t] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.split(" ").map(Number));

const bfs = (n, m, t, board) => {
  let queue = [[0, 0, 0, false]]; // i, j, time, hasItem
  let visited = new Array(n)
    .fill()
    .map(() => new Array(m).fill().map(() => new Array(2).fill(false)));
  visited[0][0][0] = true;

  while (queue.length) {
    let [i, j, time, hasItem] = queue.shift();

    if (time > t) continue;

    if (i === n - 1 && j === m - 1) {
      if (time <= t) return time;
      else return "Fail";
    }

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        // 아이템이 없는 경우
        if (!hasItem && !visited[ni][nj][0]) {
          // 0 : 갈 수 있는 곳이면 통과
          if (board[ni][nj] === 0) {
            visited[ni][nj][0] = true;
            queue.push([ni, nj, time + 1, hasItem]);
          }
          // 2: 그람이 있는 경우 줍줍
          if (board[ni][nj] === 2) {
            visited[ni][nj][1] = true;
            queue.push([ni, nj, time + 1, true]);
          }
        }

        if (hasItem && !visited[ni][nj][1]) {
          visited[ni][nj][1] = true;
          queue.push([ni, nj, time + 1, true]);
        }
      }
    }
  }

  return "Fail";
};

const res = bfs(n, m, t, board);

console.log(res);
