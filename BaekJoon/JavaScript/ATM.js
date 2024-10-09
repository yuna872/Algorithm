const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let waitingTime = 0;
arr.forEach((v) => {
  waitingTime += v;
  answer += waitingTime;
});

console.log(answer);
