const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const g = +input[0];

let answer = [];
let p1 = 1;
let p2 = 1;
while (true) {
  let diff = p2 * p2 - p1 * p1;
  if (p2 - p1 === 1 && diff > g) break;

  if (diff < g) {
    p2++;
  } else {
    p1++;
  }

  if (diff === g) {
    answer.push(p2);
  }
}

console.log(answer.length ? answer.join("\n") : -1);
