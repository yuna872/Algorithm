const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let requests = input.shift().split(" ").map(Number);
let budget = +input.shift();

function solution(N, requests, budget) {
  requests.sort((a, b) => a - b);

  let start = 0;
  let end = requests[N - 1];
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let total = requests.reduce((acc, cur) => acc + (cur > mid ? mid : cur), 0);

    if (total > budget) end = mid - 1;
    else {
      answer = mid > answer ? mid : answer;
      start = mid + 1;
    }
  }

  console.log(answer);
}

solution(N, requests, budget);
