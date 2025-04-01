const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

while (input.length) {
  const [N, M] = input.shift().split(" ").map(Number);

  // 마지막줄 0 0 이 주어지면 종료
  if (N === 0 && M === 0) break;

  const ground = new Array(M);
  for (let i = 0; i < M; i++) {
    ground[i] = input.shift().split(" ").map(Number);
  }

  let visited = new Array(M).fill().map(() => new Array(M).fill(false));
  let cnt = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (ground[i][j] === 1 && !visited[i][j]) {
        // 섬의 개수 + 1
        cnt++;

        // bfs
        let queue = [[i, j]];

        while (queue.length) {
          const [ii, jj] = queue.shift();
          for (let [di, dj] of directions) {
            const ni = ii + di;
            const nj = jj + dj;
            if (
              ni < M &&
              ni >= 0 &&
              nj < N &&
              nj >= 0 &&
              ground[ni][nj] === 1 &&
              !visited[ni][nj]
            ) {
              queue.push([ni, nj]);
              visited[ni][nj] = true;
            }
          }
        }
      }
    }
  }

  console.log(cnt);
}
