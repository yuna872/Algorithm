const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
let line = input[0].split("");

const robotIndexList = [];
line.forEach((v, idx) => {
  if (v === "P") robotIndexList.push(idx);
});

let cnt = 0;
robotIndexList.forEach((idx) => {
  for (let i = idx - K; i <= idx + K; i++) {
    if (i >= 0 && i < N) {
      if (line[i] === "H") {
        cnt++;
        line[i] = "X";
        break;
      }
    }
  }
});

console.log(cnt);
