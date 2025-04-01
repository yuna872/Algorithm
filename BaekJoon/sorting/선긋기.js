const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const lines = input.map((v) => v.split(" ").map(Number));

lines.sort((a, b) => a[0] - b[0]);

let start = lines[0][0];
let end = lines[0][1];
let answer = 0;
for (let i = 1; i < n; i++) {
  const next = lines[i];
  // 다음 선의 시작이 현재 end보다 작을 때
  if (end >= next[0]) {
    end = Math.max(end, next[1]);
  } else {
    answer += end - start;
    start = next[0];
    end = next[1];
  }
}

answer += end - start;

console.log(answer);
