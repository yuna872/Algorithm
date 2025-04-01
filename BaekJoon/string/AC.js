const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(method, n, arr) {
  let isReversed = false;
  let front = 0;
  let back = n;

  for (let cmd of method) {
    if (cmd === "R") isReversed = !isReversed;
    else if (cmd === "D") {
      if (front === back) return "error";
      isReversed ? back-- : front++;
    }
  }

  let res = arr.slice(front, back);
  if (isReversed) res.reverse();

  return `[${res.join(",")}]`;
}

const t = +input.shift();

for (let i = 0; i < t; i++) {
  const method = input.shift();
  const n = +input.shift();
  const arr = JSON.parse(input.shift());

  console.log(solution(method, n, arr));
}
