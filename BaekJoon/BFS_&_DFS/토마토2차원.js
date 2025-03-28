const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let box = new Array(M);
for (let i = 0; i < M; i++) {
  box[i] = input[i].split(" ").map(Number);
}

let queue = [];
let unRiple = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (box[i][j] === 1) queue.push([i, j, 0]);
    if (box[i][j] === 0) unRiple++;
  }
}

let front = 0;
let res;
if (unRiple === 0) res = 0;
while (front < queue.length) {
  const [i, j, days] = queue[front++];

  for (let [di, dj] of [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]) {
    const ni = i + di;
    const nj = j + dj;

    if (ni >= 0 && ni < M && nj >= 0 && nj < N && box[ni][nj] === 0) {
      queue.push([ni, nj, days + 1]);
      box[ni][nj] = 1;
      unRiple--;
    }
  }

  if (unRiple === 0) res = days;
}

console.log(res === undefined ? -1 : res);
