const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, d, k, coupon] = input.shift().split(" ").map(Number);
const sushis = input.map(Number);

let belt = sushis.concat(sushis);

let kinds = new Map();
let cnt = 0;
for (let i = 0; i < k; i++) {
  if (!kinds.has(belt[i])) {
    kinds.set(belt[i], 1);
    cnt++;
  } else kinds.set(belt[i], kinds.get(belt[i]) + 1);
}

let maxCnt = 0;
for (let i = k; i < belt.length; i++) {
  let next = belt[i];
  let prev = belt[i - k];

  // 다음 초밥 추가
  if (!kinds.has(next)) {
    kinds.set(next, 1);
  } else kinds.set(next, kinds.get(next) + 1);

  // 이전 초밥 제거
  kinds.set(prev, kinds.get(prev) - 1);
  if (kinds.get(prev) === 0) {
    kinds.delete(prev);
  }

  cnt = kinds.size;
  cnt += !kinds.has(coupon) ? 1 : 0;

  maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
