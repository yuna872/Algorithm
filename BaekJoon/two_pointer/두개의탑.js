const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map(Number);

const sumArr = [0, ...arr];
for (let i = 1; i < n + 1; i++) {
  sumArr[i] += sumArr[i - 1];
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n + 1; j++) {
    let dist = Math.min(
      sumArr[n] - sumArr[j] + sumArr[i],
      sumArr[j] - sumArr[i]
    );
    if (answer < dist) answer = dist;
  }
}

console.log(answer);
