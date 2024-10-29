const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = input.shift().split(" ").map(Number);
}
