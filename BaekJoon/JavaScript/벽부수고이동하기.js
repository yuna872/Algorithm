const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let board = [];
input.forEach((line) => {
  board.push(line.split("").map(Number));
});

const bfs = () => {
    let visited = new Array(N).fill().map(() => new Array(M).fill().map(() => [0, 0])) // [벽 뿌신 방문, 안 뿌신 방문]
    visited[0][0] = [1, 0];

    let queue = [[0, 0, 0]]
}

// let min = N * M + 1;

// const bfs = (i, j, board) => {
//   let visited = new Array(N)
//     .fill()
//     .map(() => new Array(M).fill().map(() => false));
//   let queue = [[i, j, 1]];
//   visited[i][j] = true;

//   while (queue.length) {
//     let [ci, cj, move] = queue.pop();

//     if(min < move) return

//     if (ci === N - 1 && cj === M - 1) {
//       return move;
//     }

//     for ([di, dj] of [
//       [0, 1],
//       [1, 0],
//       [-1, 0],
//       [0, -1],
//     ]) {
//       const ni = ci + di;
//       const nj = cj + dj;
//       if (ni >= 0 && ni < N && nj >= 0 && nj < M) {
//         if (!visited[ni][nj] && board[ni][nj] === 0) {
//           queue.unshift([ni, nj, move + 1]);
//           visited[ni][nj] = true;
//         }
//       }
//     }
//   }
// };

// let copy = board.slice();
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < M; j++) {
//     if (board[i][j] === 1) {
//       copy[i][j] = 0;
//       const move = bfs(0, 0, copy);
//       min = min > move ? move : min
//       copy[i][j] = 1;
//     }
//   }
// }

// console.log(min === N * M +1 ? -1 : min)
