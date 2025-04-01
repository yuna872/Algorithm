const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

let rest = K;
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  if (rest >= coins[i]) {
    cnt += Math.floor(rest / coins[i]);
    rest = rest % coins[i];
  }
}

console.log(cnt);
