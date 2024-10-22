const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [K, N] = input.shift().split(" ").map(Number);
let arr = [];
for (let k = 0; k < K; k++) {
  arr.push(+input.shift());
}
function solution(K, N, arr) {
  let min = 1;
  let max = Math.max(...arr);
  let answer = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let cnt = arr.reduce((acc, len) => acc + Math.floor(len / mid), 0);

    if (cnt < N) {
      max = mid - 1;
    } else {
      answer = Math.max(mid, answer);
      min = mid + 1;
    }
  }

  console.log(answer);
}

solution(K, N, arr);
