const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const towers = input[1].split(" ").map((v, idx) => [Number(v), idx]);

let answer = new Array(N).fill(0);
let stack = [];
for (let i = 0; i < N; i++) {
  const tower = towers[i];

  while (stack.length) {
    // 수신 가능
    if (stack[stack.length - 1][0] > tower[0]) {
      answer[tower[1]] = stack[stack.length - 1][1] + 1;
      break;
    } else stack.pop();
  }

  stack.push(tower);
}

console.log(answer.join(" "));
