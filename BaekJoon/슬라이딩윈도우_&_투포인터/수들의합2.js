const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let left = 0;
let right = 0;
let cnt = 0;
let sumV = arr[0];
while (right < n) {
  if (sumV === m) {
    cnt++;
    right++;
    sumV = sumV + arr[right] - arr[left];
    left++;
  } else if (sumV < m) {
    right++;
    if (right === n) break;
    sumV += arr[right];
  } else {
    sumV -= arr[left];
    left++;
  }
}

console.log(cnt);
