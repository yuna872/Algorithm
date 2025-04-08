const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const times = input.map(Number);

times.sort((a, b) => a - b);

let start = BigInt(1);
let end = BigInt(m * times[n - 1]);
let minV = end;
while (start <= end) {
  // 시간
  let mid = BigInt(start + end) / 2n;

  let cnt = 0n;
  times.forEach((time) => {
    cnt += BigInt(mid) / BigInt(time);
  });

  if (cnt >= m) {
    end = mid - 1n;
    minV = minV > mid ? mid : minV; 
  } else {
    start = mid + 1n;
  }
}

console.log(String(minV));
