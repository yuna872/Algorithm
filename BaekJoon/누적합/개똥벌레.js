const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, h] = input.shift().split(" ").map(Number);
let up = new Array(h + 1).fill(0);
let down = new Array(h + 1).fill(0);
for (let i = 0; i < n; i++) {
  let tmp = +input[i];
  if (i % 2) down[tmp]++;
  else up[tmp]++;
}

for (let i = h - 1; i > 0; i--) {
  up[i] += up[i + 1];
  down[i] += down[i + 1];
}

let minCnt = Infinity;
let answer = 0;
for (let i = 1; i < h + 1; i++) {
  const cnt = down[i] + up[h - i + 1];

  if (minCnt > cnt) {
    minCnt = cnt;
    answer = 1;
  } else if (minCnt === cnt) {
    answer++;
  }
}
console.log(minCnt, answer);
