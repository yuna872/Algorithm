const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = input.shift().split(" ").map(Number);
}

let [L1, R1] = input.shift().split(" ").map(Number);
let [L2, R2] = input.shift().split(" ").map(Number);

function attack(L, R, board) {
  for (let i = L - 1; i < R; i++) {
    let j = 0;
    while (j < M && board[i][j] === 0) {
      j++;
    }
    if (j < M) board[i][j] = 0;
  }
}

attack(L1, R1, board);
attack(L2, R2, board);

let answer = 0;
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(board[i][j] === 0) continue;
        else answer += 1
    }
}

console.log(answer)