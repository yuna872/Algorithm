const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let S = input[0].split(" ").map(Number);

S.sort((a, b) => a - b);
console.log(S[N - 1] + N - 1);
