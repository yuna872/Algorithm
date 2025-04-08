const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const moneys = input.map(Number);

let min = Math.max(...moneys);
let max = moneys.reduce((a, b) => a + b, 0);
let answer = max;
while (min <= max) {
  // k원
  let mid = Math.floor((min + max) / 2);

  let cnt = 0;
  let pocket = 0;
  for (let money of moneys) {
    // 출금해야 하는 상황
    if (pocket < money) {
      pocket = mid - money;
      cnt++;
    } else {
      pocket -= money;
    }
  }

  if (cnt <= m) {
    max = mid - 1;
    answer = Math.min(answer, mid);
  } else {
    min = mid + 1;
  }
}

console.log(answer);
