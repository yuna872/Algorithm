const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const fruits = input[1].split(" ").map(Number);

let counts = new Array(10).fill(0);

let maxLen = 0;
let left = 0;
let right = 0;
let kind = 0;

while (right < n) {
  // 종류와 갯수 추가
  if (counts[fruits[right]] === 0) kind++;
  counts[fruits[right]]++;

  // 만약 종류가 2가지 이상이면
  if (kind > 2) {
    // 종류가 2개 이하가 될 때까지
    while (kind > 2) {
      // 갯수 줄이기
      counts[fruits[left]]--;
      // 갯수가 0개가 됐다면 종류 1 감소
      if (counts[fruits[left]] === 0) kind--;
      // 맨앞 과일 삭제
      left++;
    }
  }

  maxLen = Math.max(maxLen, right - left + 1);

  right++;
}

console.log(maxLen);
