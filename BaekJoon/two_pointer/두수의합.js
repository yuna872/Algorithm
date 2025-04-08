const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const x = +input[2];

let cnt = 0;
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (x === arr[i] + arr[j]) cnt++;
  }
}

console.log(cnt)