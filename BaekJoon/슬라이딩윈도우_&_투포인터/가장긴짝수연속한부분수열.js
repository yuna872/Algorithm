const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let even = 0;
let odd = 0;

let maxLen = 0;
while (right < n) {
  // right가 짝수일 때
  if (arr[right] % 2 === 0) {
    even++; // 추가
  } else {
    // 홀수인 경우
    odd++;
    if (odd > k) {
      while (odd > k) {
        if (arr[left] % 2 === 0) even--;
        else odd--;
        left++;
      }
    }
  }

  if (maxLen < even) {
    maxLen = even;
  }

  right++;
}

console.log(maxLen);
