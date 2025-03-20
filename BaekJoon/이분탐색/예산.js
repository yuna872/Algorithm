const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const budgets = input[1].split(" ").map(Number);
const total = +input[2];

let min = 1;
let max = Math.max(...budgets);

let answer = 0;
while (min <= max) {
  // 상한액 설정
  let mid = Math.floor((min + max) / 2);

  let sumV = 0;
  for (let i = 0; i < N; i++) {
    const budget = budgets[i];
    if (budget > mid) sumV += mid;
    else sumV += budget;
  }

  if (sumV <= total) {
    answer = mid;
    min = mid + 1;
  } else max = mid - 1;
}

console.log(answer);
