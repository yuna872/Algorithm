const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const balls = input[1];

let minCnt = Infinity;

// red, left
let cnt = 0;
for (let i = 0; i < n; i++) {
  let check = false;
  if (balls[i] === "B") {
    check = true;
    let j = i + 1;
    while (j < n) {
      cnt += balls[j] === "R" ? 1 : 0;
      j++;
    }
  }
  if (check) break;
}

minCnt = Math.min(cnt, minCnt);

// red, right
cnt = 0;
for (let i = n; i >= 0; i--) {
  let check = false;
  if (balls[i] === "B") {
    check = true;
    let j = i - 1;
    while (j >= 0) {
      cnt += balls[j] === "R" ? 1 : 0;
      j--;
    }
  }
  if (check) break;
}

minCnt = Math.min(cnt, minCnt);

// blue, left
cnt = 0;
for (let i = 0; i < n; i++) {
  let check = false;
  if (balls[i] === "R") {
    check = true;
    let j = i + 1;
    while (j < n) {
      cnt += balls[j] === "B" ? 1 : 0;
      j++;
    }
  }
  if (check) break;
}

minCnt = Math.min(cnt, minCnt);

// blue, right
cnt = 0;
for (let i = n; i >= 0; i--) {
  let check = false;
  if (balls[i] === "R") {
    check = true;
    let j = i - 1;
    while (j >= 0) {
      cnt += balls[j] === "B" ? 1 : 0;
      j--;
    }
  }
  if (check) break;
}

minCnt = Math.min(cnt, minCnt);

console.log(minCnt);
