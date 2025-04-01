const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.map(Number).sort((a, b) => a - b);

nums.sort((a, b) => a - b);

let minDiff = Infinity;
let left = 0;
let right = 0;
while (left <= right && right < n) {
  const diff = nums[right] - nums[left];
  if (diff < m) right++;
  else {
    minDiff = Math.min(minDiff, diff);
    left++;
  }

  if (minDiff === m) break;
}

console.log(minDiff)
