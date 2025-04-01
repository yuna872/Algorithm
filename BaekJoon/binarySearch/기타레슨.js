const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lessons = input[1].split(" ").map(Number);

let left = Math.max(...lessons);
let right = lessons.reduce((acc, cur) => acc + cur, 0);

let answer = 0;
while (left <= right) {
  // mid: 블루레이의 크기
  let mid = Math.floor((left + right) / 2);

  let total = 0;
  let cnt = 1;
  for (let time of lessons) {
    if (total + time > mid) {
      cnt++;
      total = 0;
    }
    total += time;
  }

  if (cnt <= m) {
    right = mid - 1;
    answer = mid;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
