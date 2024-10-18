const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let boxes = input.shift().split(" ").map(Number);
function solution(N, boxes) {
  let dp = new Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    let j = 0;
    while (j < i) {
      if (boxes[i] > boxes[j]) dp[i] = Math.max(dp[i], dp[j] + 1);

      j++;
    }
  }

  console.log(Math.max(...dp));
}

solution(N, boxes);
