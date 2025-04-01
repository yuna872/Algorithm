const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let counts = new Array(1000001).fill(0);

let maxLen = 0;
let left = 0;
let right = 0;
while (right < n) {
  if (counts[nums[right]] < k) {
    counts[nums[right]]++;
    right++;
  } else {
    while (counts[nums[right]] >= k) {
      counts[nums[left]]--;
      left++;
    }
  }

  maxLen = Math.max(maxLen, right - left);
}

console.log(maxLen);
