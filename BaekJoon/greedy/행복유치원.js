const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const students = input[1].split(" ").map(Number);

const diffs = [];
for (let i = 1; i < n; i++) {
  diffs.push(students[i] - students[i - 1]);
}

console.log(
  diffs
    .sort((a, b) => b - a)
    .slice(k - 1, n - 1)
    .reduce((acc, cur) => acc + cur, 0)
);
