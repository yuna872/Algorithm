const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
for (let i = 1; i < N; i++) {
  nums[i] += nums[i - 1];
}

let left = 0;
let right = 0;
let minLen = Infinity;
while (right < N) {
  const sumV = left === 0 ? nums[right] : nums[right] - nums[left - 1];
  const len = right - left + 1;

  if (sumV >= S) {
    minLen = Math.min(minLen, len);
    left++;
  } else {
    right++;
  }
}

console.log(minLen === Infinity ? 0 : minLen);
