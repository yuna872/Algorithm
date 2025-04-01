const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const k = +input[1];
const sensors = input[2].split(" ").map(Number);

sensors.sort((a, b) => a - b);

let gaps = [];
for (let i = 1; i < n; i++) {
  gaps.push(sensors[i] - sensors[i - 1]);
}
const answer = gaps
  .sort((a, b) => b - a)
  .slice(k - 1, n)
  .reduce((acc, cur) => acc + cur, 0);

console.log(answer);
