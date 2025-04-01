const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, H] = input.shift().split(" ").map(Number);
let box = new Array(H);
for (let h = 0; h < H; h++) {
  let tomatos = new Array(M);

  for (let n = 0; n < M; n++) {
    tomatos[n] = input.shift().split(" ").map(Number)  }

  box[h] = tomatos;
}

const direction = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

let unRipleTomato = 0;
let queue = [];
for (let k = 0; k < H; k++) {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (box[k][i][j] === 1) {
        queue.push([i, j, k, 0]);
      }
      if (box[k][i][j] === 0) unRipleTomato++;
    }
  }
}

let front = 0;
let answer = -1;
while (front < queue.length) {
  const [i, j, k, days] = queue[front++];

  for (let [di, dj, dk] of direction) {
    const ni = i + di;
    const nj = j + dj;
    const nk = k + dk;
    if (
      0 <= ni &&
      ni < M &&
      0 <= nj &&
      nj < N &&
      0 <= nk &&
      nk < H &&
      box[nk][ni][nj] === 0
    ) {
      queue.push([ni, nj, nk, days + 1]);
      box[nk][ni][nj] = 1;
      unRipleTomato--
    }
  }

  answer = unRipleTomato == 0 ? days : -1

}


console.log(answer)
