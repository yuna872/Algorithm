const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const box = new Array(M);
for (let i = 0; i < M; i++) {
  box[i] = input[i].split(" ").map(Number);
}

const findRipeTomatos = (box) => {
  let tomatos = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (box[i][j] === 1) tomatos.push([i, j]);
    }
  }
  return tomatos;
};

let day = 0;
const bfs = () => {
  let queue = findRipeTomatos(box);

  while (queue.length) {
    let [i, j] = queue.shift();

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < M && nj >= 0 && nj < N && box[ni][nj] === 0) {
        box[ni][nj] = box[i][j] + 1;
        day = box[i][j];
        queue.push([ni, nj]);
      }
    }
  }
};

bfs();

for (let i = 0; i < M; i++) {
  if (box[i].includes(0)) {
    day = -1
    break;
  }
}

console.log(day);
