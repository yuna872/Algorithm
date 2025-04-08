const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let maxLen = 0;

let left = 0;
let right = 0;
let counts = new Array(1000001).fill(0);
while (right < n) {
  const num = arr[right];

  if (counts[num] < k) {
    counts[num]++;
    right++;
  } else {
    while (counts[num] >= k) {
      counts[arr[left]]--;
      left++;
    }
  }

  maxLen = Math.max(maxLen, right - left);
}

console.log(maxLen);
