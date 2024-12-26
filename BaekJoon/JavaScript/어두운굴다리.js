const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();
const x = input.shift().split(" ").map(Number);

let result;
let min = 0;
let max = N;
while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  if (isCovered(mid)) {
    result = mid;
    max = mid - 1;
  } else min = max + 1;
}

function isCovered(len) {
  let prev = 0;
  for (let i = 0; i < M; i++) {
    // 빈틈이 생기면
    if (prev < x[i] - len) return false;
    // prev 갱신
    prev = x[i] + len;
  }

  return prev > N ? true : false;
}

console.log(min, max, result);
