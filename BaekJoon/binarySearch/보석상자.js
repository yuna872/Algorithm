const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const colors = input.map(Number);

let start = 1;
let end = Math.max(...colors);
let minV = Infinity;
while (start <= end) {
  // 질투심
  let mid = Math.floor((start + end) / 2);

  let people = 0;
  // 필요한 사람 수 구하기
  for (let color of colors) {
    people += Math.floor(color / mid) + (color % mid !== 0);
  }

  // 사람 수가 더 적으면 더 조금씩 나눠주기
  if (people <= n) {
    end = mid - 1;
    minV = Math.min(minV, mid);
  } else start = mid + 1;
}

console.log(minV);
