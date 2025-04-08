const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, c] = input.shift().split(" ").map(Number);
const houses = input.map(Number);

houses.sort((a, b) => a - b);

let start = 1;
let end = houses[n - 1];
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let cnt = 1;
  // 첫째집은 무조건 설치
  let prev = houses[0];

  // 공유기 설치하기
  for (let i = 1; i < n; i++) {
    const cur = houses[i];
    if (cur - prev >= mid) {
      // 설치
      cnt++;
      prev = cur;
    }
  }

  if (cnt < c) end = mid - 1;
  else start = mid + 1;
}

console.log(end);
