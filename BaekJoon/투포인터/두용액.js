const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let minV = Math.abs(arr[left] + arr[right]);
let answer = [arr[left], arr[right]];
while (left < right) {
  const val = arr[left] + arr[right];

  if (minV > Math.abs(val)) {
    minV = Math.abs(val);
    answer = [arr[left], arr[right]];

    if (val === 0) break;
  }

  if (val < 0) left++;
  else right--;
}

console.log(answer[0], answer[1]);
