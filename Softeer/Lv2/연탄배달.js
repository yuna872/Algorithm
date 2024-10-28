const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);

let maxV = 0;
for (let i = 2; i < 100; i++) {
  let cnt = arr.filter((num) => num % i === 0).length;

  maxV = Math.max(cnt, maxV);
}

console.log(maxV);
