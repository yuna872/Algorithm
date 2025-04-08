const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map(Number);

let cnt = 0;
let stack = [];

for (let i = 0; i < n; i++) {
  const height = arr[i];

  while (stack.length && stack[stack.length - 1] <= height) {
    stack.pop();
  }

  cnt += stack.length;
  stack.push(height);
}

console.log(cnt);
