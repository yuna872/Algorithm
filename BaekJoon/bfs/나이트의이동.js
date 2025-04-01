const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

const directions = [
  [1, 2],
  [2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [-2, 1],
  [-1, 2],
  [2, -1],
];

for (let t = 0; t < T; t++) {
  const N = +input[t * 3];
  const from = input[t * 3 + 1].split(" ").map(Number);
  const to = input[t * 3 + 2].split(" ").map(Number);

  let minStep = Infinity;
  let queue = [[from[0], from[1], 0]];

  let visited = new Array(N).fill().map(() => new Array(N).fill(false));
  visited[from[0]][from[1]] = true;

  while (queue.length) {
    const [i, j, step] = queue.shift();

    if (to[0] === i && to[1] === j) {
      if (minStep > step) minStep = step;
    }

    for (let [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < N && nj >= 0 && nj < N && !visited[ni][nj]) {
        queue.push([ni, nj, step + 1]);
        visited[ni][nj] = true;
      }
    }
  }

  console.log(minStep);
}
