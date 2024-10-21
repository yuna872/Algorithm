const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [M, N] = input.shift().split(" ").map(Number);
let snacks = input.shift().split(" ").map(Number);

function solution(N, snacks) {
  snacks.sort((a, b) => a - b);

  let start = 1;
  let end = snacks[N - 1];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let pieces = cutSnack(snacks, mid);

    if (M <= pieces) start = mid + 1;
    else if (M > pieces) end = mid - 1;
  }

  console.log(end)

}

function cutSnack(snacks, len) {
  return snacks.reduce((acc, snack) => acc + Math.floor(snack / len), 0);
}

solution(N, snacks)
