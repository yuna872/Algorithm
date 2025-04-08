const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const meetings = input
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[1] : a[1] - b[1]));

let cnt = 0;
let now = 0;
for (let [start, end] of meetings) {
  // 회의 시작 가능?
  if (now <= start) {
    cnt++;
    now = end;
  }
}

console.log(cnt);
