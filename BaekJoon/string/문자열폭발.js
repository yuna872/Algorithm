const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const n = str.length;
const bomb = input[1];
const m = bomb.length;

let stack = [];
for (let i = 0; i < n; i++) {
  stack.push(str[i]);

  if (stack[stack.length - 1] === bomb[m - 1] && stack.length >= m) {
    if (stack.slice(-m).join("") === bomb) {
      for (let j = 0; j < m; j++) stack.pop();
    }
  }
}

if (stack.length) {
  console.log(stack.join(""));
} else console.log("FRULA");
